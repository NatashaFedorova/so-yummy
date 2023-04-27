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
  const [initialDataState, setInitialDataState] = useState(initialValues);
  const [ingredientsState, setIngredientsState] = useState(initialIngredients);
  const [textareaContent, setTextareaContent] = useState([]);
  const photo = useRef(null);
  const error = useSelector(selectAddRecipeError);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async event => {
    event.preventDefault();

    const formData = new FormData();
    const ingredients = ingredientsState.map(item => ({
      id: item._id,
      measure: item.quantity,
    }));

    if (photo.current) {
      formData.set('recipeImage', photo.current);
    }

    formData.set('title', initialDataState.title);
    formData.set('description', initialDataState.description);
    formData.set('category', initialDataState.category);
    formData.set('time', initialDataState.time);
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
    setInitialDataState(prevState => ({
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
    const newIngredients = ingredientsState.filter(item => {
      return item.id.toString() !== event.target.closest('li').id.toString();
    });

    setIngredientsState(newIngredients);
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
        initialDataState={initialDataState}
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
        value={textareaContent}
        onChange={textareaChangeHandler}
      />
    </AddRecipeFormComponent>
  );
};

export default AddRecipeForm;
