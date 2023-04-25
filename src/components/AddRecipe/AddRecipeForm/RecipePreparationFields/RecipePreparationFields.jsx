import SecondaryTitle from 'components/AddRecipe/SecondaryTitle/SecondaryTitle';
import {
  RecipePreparationFieldsWrapper,
  SubmitButtom,
  Textarea,
} from './RecipePreparationFields.styled';

const RecipePreparationFields = () => {
  return (
    <RecipePreparationFieldsWrapper>
      <SecondaryTitle>Recipe Preparation</SecondaryTitle>
      <Textarea
        name="preparation"
        cols="30"
        rows="10"
        placeholder="Enter recipe"
      ></Textarea>
      <SubmitButtom type="submit">Add</SubmitButtom>
    </RecipePreparationFieldsWrapper>
  );
};

export default RecipePreparationFields;
