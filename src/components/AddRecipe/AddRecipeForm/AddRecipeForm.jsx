import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import RecipeDescriptionField from './RecipeDescriptionFields/RecipeDescriptionFields';
import RecipeIngredientsFields from './RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from './RecipePreparationFields/RecipePreparationFields';

import { initialIngredients, initialValues } from '../helpers/vars';
import { selectAddRecipeError } from 'redux/recipes/selectors/addRecipeSelectors';

import { AddRecipeFormComponent } from './AddRecipeForm.styled';
import addRecipe from 'redux/recipes/operations/addRecipe';

const AddRecipeForm = () => {
  const [descriptionFields, setDescriptionFields] = useState(initialValues);
  const [descriptionFieldsReady, setDescriptionFieldsReady] = useState(false);

  const [ingredientsState, setIngredientsState] = useState(initialIngredients);
  const [ingredientsStateReady, setIngredientsStateReady] = useState(false);

  const [textareaContent, setTextareaContent] = useState([]);
  const [textareaReady, setTextareaReady] = useState(false);

  const photo = useRef(null);
  const isFormFieldsValid = useRef(null);
  const error = useSelector(selectAddRecipeError);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (descriptionFieldsReady && ingredientsStateReady && textareaReady) {
      isFormFieldsValid.current = true;
    }
  }, [descriptionFieldsReady, ingredientsStateReady, textareaReady]);

  const submitHandler = async event => {
    event.preventDefault();

    const formData = new FormData();

    const ingredients = ingredientsState.map(item => ({
      id: item._id,
      measure: item.quantity,
    }));
    const { title, description, category, time } = descriptionFields;

    if (photo.current) {
      formData.set('recipeImage', photo.current);
    }

    formData.set('title', title);
    formData.set('description', description);
    formData.set('category', category);
    formData.set('time', time);
    formData.set('ingredients', JSON.stringify(ingredients));
    formData.set('instructions', JSON.stringify(textareaContent));

    dispatch(addRecipe(formData));

    if (!error) {
      navigate('/my', { replace: true });
    }
  };

  useEffect(() => {
    if (!error) return;

    Notify.failure(error);
  }, [error]);

  const initialDataChangeHandler = (name, value) => {
    setDescriptionFields(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const incrementHandler = () => {
    return setIngredientsState(prevCount => [
      ...prevCount,
      {
        id: nanoid(),
        ingredient: '',
        quantity: '',
      },
    ]);
  };

  const decrementHandler = () => {
    const tmp = [...ingredientsState];
    if (tmp.length === 1) {
      Notify.failure('Sorry, you need to add at least one ingredient');
      return;
    }
    tmp.splice(ingredientsState.length - 1, 1);
    return setIngredientsState(tmp);
  };

  const deleteHandler = event => {
    if (ingredientsState.length > 1) {
      const newIngredients = ingredientsState.filter(item => {
        return item.id.toString() !== event.target.closest('li').id.toString();
      });

      setIngredientsState(newIngredients);
    } else {
      Notify.failure('Sorry, you need to add at least one ingredient');
      return;
    }
  };

  const changeIngredientHandler = (id, _id) => {
    const changedIngredients = ingredientsState.map(item => {
      if (item.id === id) {
        return { ...item, _id };
      }

      return item;
    });

    setIngredientsState(changedIngredients);
  };

  const changeMeasureHandler = (id, content) => {
    const changedIngredients = ingredientsState.map(item => {
      if (id === item.id) {
        return { ...item, quantity: content };
      }

      return item;
    });

    setIngredientsState(changedIngredients);
  };

  const textareaChangeHandler = event => {
    setTextareaContent(event.target.value.split('\n'));
  };

  return (
    <AddRecipeFormComponent onSubmit={submitHandler}>
      <RecipeDescriptionField
        initialDataState={descriptionFields}
        changeHandler={initialDataChangeHandler}
        photo={photo}
      />
      <RecipeIngredientsFields
        ingredients={ingredientsState}
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
        deleteHandler={deleteHandler}
        changeHandler={changeMeasureHandler}
        changeIngredientHandler={changeIngredientHandler}
      />
      <RecipePreparationFields
        isValid={isFormFieldsValid}
        value={textareaContent}
        onChange={textareaChangeHandler}
      />
    </AddRecipeFormComponent>
  );
};

export default AddRecipeForm;
