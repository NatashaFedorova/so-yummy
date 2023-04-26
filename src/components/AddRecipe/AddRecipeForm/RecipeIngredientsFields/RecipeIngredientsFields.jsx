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
import { quantities } from 'components/AddRecipe/helpers/vars';
import { useSelector } from 'react-redux';
import { selectIngredients } from 'redux/recipes/selectors/addRecipeSelectors';

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
