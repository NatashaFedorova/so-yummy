import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import Loading from 'components/Loading/Loading';

import popularRecipes from 'redux/recipes/operations/popularRecipes';
import getIngredientsList from 'redux/recipes/operations/getIngredientsList';
import getCategories from 'redux/recipes/operations/getAddReceiptCategories';

const AddRecipe = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.categories.isLoading);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(popularRecipes());
    dispatch(getIngredientsList());
  }, [dispatch]);

  return (
    <AddRecipeSection>
      <Container>
        <InternalWrapper>
          <MainTitle>Add recipe</MainTitle>
          {!isLoading && (
            <LeftWrapper>
              <AddRecipeForm />
              <RightWrapper>
                <FollowUs />
                <PopularRecipe />
              </RightWrapper>
            </LeftWrapper>
          )}
        </InternalWrapper>
        {isLoading && <Loading />}
      </Container>
    </AddRecipeSection>
  );
};

export default AddRecipe;
