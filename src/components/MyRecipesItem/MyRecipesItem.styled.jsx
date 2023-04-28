import styled from 'styled-components';
import { FavoriteBtnDetails, FavoriteBtnDelete, FavoriteIconBtnDelete  } from 'components/FavoriteItem/FavoriteItem.styled';

export const MyRecipesDeleteBtn = styled(FavoriteBtnDelete)`
  background-color: ${props => props.theme.colors.myRecipesPage.btnDeleteBgC};

  &:hover, :focus {
    background-color: ${props => props.theme.colors.myRecipesPage.btnDeleteBgCHover};

    // svg {color: ${props => props.theme.colors.myRecipesPage.iconBtnDeleteCHover};}
  }
`;

export const MyRecipesDeleteIcon = styled(FavoriteIconBtnDelete )`
  color: ${props => props.theme.colors.myRecipesPage.iconBtnDeleteC};
`;

export const MyRecipesBtnDetails = styled(FavoriteBtnDetails)`
  background-color: ${props => props.theme.colors.myRecipesPage.btnDetailsBgC};

  &:hover, :focus {
    background-color: ${props => props.theme.colors.myRecipesPage.btnDetailsCHover};
  }
`;