import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import SecondaryTitle from 'components/AddRecipe/SecondaryTitle/SecondaryTitle';

import { DeleteButton } from 'components/AddRecipe/IconBtn/IconBtn.styled';
import {
  CounterValue,
  CounterWrapper,
  DeleteIcon,
  ListItem,
  RecipeIngredientsList,
  RecipeIngredientsWrapper,
  TopWrapper,
} from './RecipeIngredientsFields.styled';
import CustomSelect from './CustomSelect';

const RecipeIngredientsFields = ({
  ingredients,
  incrementHandler,
  decrementHandler,
  deleteHandler,
  changeHandler,
  changeIngredientHandler,
}) => {
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
              <CustomSelect
                handleChange={handleChange}
                changeHandler={changeHandler}
                id={item.id}
                quantity={item.quantity}
                ingredient={item._id}
              />
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
