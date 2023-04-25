import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import SecondaryTitle from 'components/AddRecipe/SecondaryTitle/SecondaryTitle';
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
  SmallSelect,
  TopWrapper,
} from './RecipeIngredientsFields.styled';

const initialIngredients = [
  { id: '12', ingredient: 'potato', weight: '2kg' },
  { id: '13', ingredient: 'cucumber', weight: '9kg' },
  { id: '14', ingredient: 'tomato', weight: '1kg' },
];

const initialOption = [
  { value: 'baloon', label: 'baloon', id: 1 },
  { value: 'hallo', label: 'hallo', id: 2 },
  { value: 'owww', label: 'owww', id: 3 },
];

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

  const incrementHandler = () => {
    return setIngredients(prevCount => [
      ...prevCount,
      {
        id: prevCount.length + 100,
        ingredient: '',
        weight: '',
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
    setIngredients(
      ingredients.filter(item => {
        return Number(item.id) !== Number(event.target.closest('li').id);
      })
    );
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
        {ingredients.map(item => {
          return (
            <ListItem id={item.id} key={item.weight}>
              <SelectWrapper>
                <NewSelect
                  type="text"
                  placeholder={item.ingredient}
                  options={initialOption}
                  name="ingredient"
                  id={item.id}
                  styles={colorStyles}
                />
                <SmallSelect
                  type="text"
                  placeholder={item.weight}
                  options={initialOption}
                  name="weight"
                  id={item.id}
                  styles={colorStyles}
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
