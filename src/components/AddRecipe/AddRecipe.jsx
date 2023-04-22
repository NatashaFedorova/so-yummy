import Container from 'components/constants/Container';
import {
  AddRecipeSection,
  InternalWrapper,
  LeftWrapper,
  RightWrapper,
} from './AddRecipe.styled';
import MainTitle from './MainTitle/MainTitle';
import FollowUs from './FollowUs/FollowUs';
import PopularRecipe from './PopularRecipe/PopularRecipe';
import AddRecipeForm from './AddRecipeForm/AddRecipeForm';

const AddRecipe = () => {
  return (
    <AddRecipeSection>
      <Container>
        <InternalWrapper>
          <MainTitle>Add recipe</MainTitle>
          <LeftWrapper>
            <AddRecipeForm />
            <RightWrapper>
              <FollowUs />
              <PopularRecipe />
            </RightWrapper>
          </LeftWrapper>
        </InternalWrapper>
      </Container>
    </AddRecipeSection>
  );
};

export default AddRecipe;
