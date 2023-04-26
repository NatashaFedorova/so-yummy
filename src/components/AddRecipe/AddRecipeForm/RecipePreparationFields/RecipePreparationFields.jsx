import SecondaryTitle from 'components/AddRecipe/SecondaryTitle/SecondaryTitle';
import {
  RecipePreparationFieldsWrapper,
  SubmitButtom,
  Textarea,
} from './RecipePreparationFields.styled';

const RecipePreparationFields = ({ value, onChange }) => {
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
      <SubmitButtom type="submit">Add</SubmitButtom>
    </RecipePreparationFieldsWrapper>
  );
};

export default RecipePreparationFields;
