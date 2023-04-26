import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import SecondaryTitle from 'components/AddRecipe/SecondaryTitle/SecondaryTitle';
import IngredientInput from './IngredientInput';
import { DeleteButton } from 'components/AddRecipe/IconBtn/IconBtn.styled';
import {
  CounterValue,
  CounterWrapper,
  DeleteIcon,
  ListItem,
  NewSelect,
  RecipeIngredientsList,
  RecipeIngredientsWrapper,
  SelectWrapper,
  TopWrapper,
} from './RecipeIngredientsFields.styled';
import {
  initialIngredients,
  quantities,
} from 'components/AddRecipe/helpers/vars';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

export const colorStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: 'rgba(217,217,217, .17)',
    borderColor: 'transparent',
    borderRadius: 6,
    paddingLeft: 16,
    height: '100%',
    color: '#23262A',
    ':hover': {
      borderColor: 'rgba(35, 38, 42, 0.2)',
    },
  }),
  indicatorSeparator: styles => ({ ...styles, backgroundColor: 'transparent' }),
  indicatorContainer: styles => ({
    ...styles,
    color: '#8BAA36',
  }),
  option: styles => {
    return {
      ...styles,
      color: '#000000',
      opacity: 0.5,
      fontSize: 14,
      lineHeight: 1.5,
    };
  },
};

const RecipeIngredientsFields = () => {
  const [ingredients, setIngredients] = useState(initialIngredients);
  const initialOption = useSelector(state => state.addRecipe.ingredients);

  const incrementHandler = () => {
    return setIngredients(prevCount => [
      ...prevCount,
      {
        id: nanoid(),
        ingredient: '',
        quantity: '',
      },
    ]);
  };

  const decrementHandler = () => {
    const tmp = [...ingredients];
    if (tmp.length === 1) {
      alert('Sorry, you need to add at least one ingredient');
      return;
    }
    tmp.splice(ingredients.length - 1, 1);
    return setIngredients(tmp);
  };

  const deleteHandler = event => {
    console.log('hallo');
    const newIngredients = ingredients.filter(item => {
      return item.id.toString() !== event.target.closest('li').id.toString();
    });

    setIngredients(newIngredients);
  };

  const changeHandler = (id, content) => {
    const changedIngredients = ingredients.map(item => {
      if (id === item.id) {
        return { ...item, quantity: content };
      }

      return item;
    });

    setIngredients(changedIngredients);
    console.log(changedIngredients);
  };

  return (
    <RecipeIngredientsWrapper>
      <TopWrapper>
        <SecondaryTitle>Ingredients</SecondaryTitle>
        <CounterWrapper>
          <DeleteButton type="button" onClick={decrementHandler}>
            <AiOutlineMinus size={16} />
          </DeleteButton>
          <CounterValue>{ingredients.length}</CounterValue>
          <DeleteButton type="button" onClick={incrementHandler}>
            <AiOutlinePlus size={16} />
          </DeleteButton>
        </CounterWrapper>
      </TopWrapper>

      <RecipeIngredientsList>
        {ingredients.map((item, index) => {
          return (
            <ListItem key={index + 100} id={item.id}>
              <SelectWrapper>
                <NewSelect
                  placeholder="ingredient"
                  id={item.id}
                  type="text"
                  options={initialOption}
                  styles={colorStyles}
                />
                <IngredientInput
                  value={item.quantity}
                  onChange={changeHandler}
                  ingredients={quantities}
                  id={item.id}
                />
              </SelectWrapper>
              <DeleteButton type="button" onClick={deleteHandler}>
                <DeleteIcon />
              </DeleteButton>
            </ListItem>
          );
        })}
      </RecipeIngredientsList>
    </RecipeIngredientsWrapper>
  );
};

export default RecipeIngredientsFields;
