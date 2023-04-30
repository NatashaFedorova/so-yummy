import { useSelector } from 'react-redux';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import SecondaryTitle from 'components/AddRecipe/SecondaryTitle/SecondaryTitle';
import IngredientInput from './IngredientInput';

import { quantities } from 'components/AddRecipe/helpers/vars';
import { selectIngredients } from 'redux/recipes/selectors/addRecipeSelectors';

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

export const colorStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    borderRadius: 6,
    height: '100%',
    boxShadow: isFocused ? 0 : 0,
    '&:hover': {},
  }),
  indicatorSeparator: styles => ({ ...styles, backgroundColor: 'transparent' }),
  indicatorContainer: styles => ({
    ...styles,
    color: '#8BAA36',
  }),
  option: styles => {
    return {
      ...styles,
      lineHeight: 1.5,
    };
  },
  noOptionsMessage: base => ({ ...base, color: '#000', textAlign: 'center' }),
};

const RecipeIngredientsFields = ({
  ingredients,
  incrementHandler,
  decrementHandler,
  deleteHandler,
  changeHandler,
  changeIngredientHandler,
}) => {
  const initialOption = useSelector(selectIngredients);

  const handleChange = (selectedOption, actionMeta) => {
    changeIngredientHandler(actionMeta.name, selectedOption._id);
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
            <ListItem key={item.id} id={item.id}>
              <SelectWrapper>
                <NewSelect
                  onChange={handleChange}
                  placeholder="ingredient"
                  id={item.id}
                  type="text"
                  name={item.id}
                  options={initialOption}
                  styles={colorStyles}
                  required
                  pattern="^[a-zA-Z]+$"
                  classNamePrefix="Select"
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
