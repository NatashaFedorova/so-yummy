import SecondaryTitle from 'components/AddRecipe/SecondaryTitle/SecondaryTitle';
import {
  RecipePreparationFieldsWrapper,
  SubmitButtom,
  Textarea,
} from './RecipePreparationFields.styled';

const RecipePreparationFields = () => {
  const textareaChangeHandler = event => {
    console.log(event.target.value.split('\n'));
  };

  return (
    <RecipePreparationFieldsWrapper>
      <SecondaryTitle>Recipe Preparation</SecondaryTitle>
      <Textarea
        onChange={textareaChangeHandler}
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
