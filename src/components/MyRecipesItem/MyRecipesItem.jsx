import { useDispatch } from 'react-redux';
import { deleteFavorite, getFavorite } from 'redux/favorite/favoriteOperation';
import { MyRecipesBtnDetails, MyRecipesDeleteBtn, MyRecipesDeleteIcon } from './MyRecipesItem.styled';

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
    await dispatch(deleteFavorite(_id));
    await dispatch(getFavorite());
  };

  return (
    <StyledFavoriteItem>
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
          <FavoriteTime>{time} min</FavoriteTime>
          <MyRecipesBtnDetails to={`/recipe/${_id}`}>See reecipe</MyRecipesBtnDetails>
        </FavoriteBoxBottom>
      </FavoriteBoxWrap>
    </StyledFavoriteItem>
  );
};

export default MyRecipesItem;