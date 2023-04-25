import styled from 'styled-components';
import { FavoriteBtnDetails, FavoriteDeleteBtn, FavoriteDeleteIcon } from 'components/FavoriteItem/FavoriteItem.styled';

export const MyRecipesDeleteBtn = styled(FavoriteDeleteBtn)`
  background-color: ${props => props.theme.colors.myRecipesPage.bgBtnRemove};
`;

export const MyRecipesDeleteIcon = styled(FavoriteDeleteIcon)`
  color: ${props => props.theme.colors.myRecipesPage.bgCardRecipe};
`;

export const MyRecipesBtnDetails = styled(FavoriteBtnDetails)`

  background-color: ${props => props.theme.colors.myRecipesPage.bgBtnAboutRecipe};
`;