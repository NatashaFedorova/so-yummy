import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SecondaryTitle from 'components/AddRecipe/SecondaryTitle/SecondaryTitle';
import { selectAddRecipeIsLoading } from 'redux/recipes/selectors/addRecipeSelectors';
import {
  RecipePreparationFieldsWrapper,
  SubmitButtom,
  Textarea,
} from './RecipePreparationFields.styled';

const RecipePreparationFields = ({ value, onChange, isValid }) => {
  const submitBtn = useRef(null);
  const isAdding = useSelector(selectAddRecipeIsLoading);

  useEffect(() => {
    if (!isValid || isAdding)
      submitBtn.current.setAttribute('disabled', 'true');

    if (isValid && !isAdding)
      submitBtn.current.setAttribute('disabled', 'false');
  }, [isValid, isAdding]);

  return (
    <RecipePreparationFieldsWrapper>
      <SecondaryTitle>Recipe Preparation</SecondaryTitle>
      <Textarea
        onChange={onChange}
        value={value.join('\n')}
        name="preparation"
        cols="30"
        rows="10"
        placeholder="Enter recipe"
        required
      ></Textarea>
      <SubmitButtom ref={submitBtn} type="submit">
        {isAdding ? 'Adding...' : 'Add'}
      </SubmitButtom>
    </RecipePreparationFieldsWrapper>
  );
};

export default RecipePreparationFields;
