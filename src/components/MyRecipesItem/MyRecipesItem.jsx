import { useDispatch } from 'react-redux';
import { MyRecipesBtnDetails, MyRecipesDeleteBtn, MyRecipesDeleteIcon } from './MyRecipesItem.styled';
import { deleteMyRecipes, getMyRecipes } from 'redux/myRecipes/myRecipesOperation';

const {
  StyledFavoriteItem,
  FavoriteImg,
  FavoriteBoxWrap,
  FavoriteBoxTop,
  FavoriteBoxCenter,
  FavoriteBoxBottom,
  FavoriteTitle,
  FavoriteDesc,
  FavoriteTime,
} = require('../FavoriteItem/FavoriteItem.styled');

const MyRecipesItem = ({
  favoriteRecipe: { _id, title, preview, description, time },
}) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    await dispatch(deleteMyRecipes(_id));
    await dispatch(getMyRecipes());
  };

  return (
    <StyledFavoriteItem >
      <FavoriteImg src={preview} alt={title} width={124} height={124} />
      <FavoriteBoxWrap>
        <FavoriteBoxTop>
          <FavoriteTitle>{title}</FavoriteTitle>
          <MyRecipesDeleteBtn
            type={'button'}
            title={'Delete'}
            onClick={handleClick}
          >
            <MyRecipesDeleteIcon />
          </MyRecipesDeleteBtn>
        </FavoriteBoxTop>
        <FavoriteBoxCenter>
          <FavoriteDesc>{description}</FavoriteDesc>
        </FavoriteBoxCenter>
        <FavoriteBoxBottom>
          <FavoriteTime>{Number.parseInt(time)} min</FavoriteTime>
          <MyRecipesBtnDetails to={`/recipe/${_id}`}>See recipe</MyRecipesBtnDetails>
        </FavoriteBoxBottom>
      </FavoriteBoxWrap>
    </StyledFavoriteItem>
  );
};

export default MyRecipesItem;