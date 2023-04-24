import { useDispatch } from 'react-redux';
import { deleteFavorite } from 'redux/favorite/favoriteOperation';

const {
  StyledFavoriteItem,
  FavoriteImg,
  FavoriteBoxWrap,
  FavoriteBoxTop,
  FavoriteBoxCenter,
  FavoriteBoxBottom,
  FavoriteTitle,
  FavoriteDeleteBtn,
  FavoriteDeleteIcon,
  FavoriteDesc,
  FavoriteTime,
  FavoriteBtnDetails,
} = require('./FavoriteItem.styled');

const FavoriteItem = ({
  favoriteRecipe: { _id, title, preview, description, instructions, time },
}) => {
  const dispatch = useDispatch();

  return (
    <StyledFavoriteItem>
      <FavoriteImg src={preview} alt={title} width={124} height={124} />
      <FavoriteBoxWrap>
        <FavoriteBoxTop>
          <FavoriteTitle>{title}</FavoriteTitle>
          <FavoriteDeleteBtn
            type={'button'}
            title={'Delete'}
            onClick={() => dispatch(deleteFavorite(_id))}
          >
            <FavoriteDeleteIcon />
          </FavoriteDeleteBtn>
        </FavoriteBoxTop>
        <FavoriteBoxCenter>
          <FavoriteDesc>
            {description}
            {instructions}
          </FavoriteDesc>
        </FavoriteBoxCenter>
        <FavoriteBoxBottom>
          <FavoriteTime>{time} min</FavoriteTime>
          <FavoriteBtnDetails to={`/recipe/${_id}`}>See reecipe</FavoriteBtnDetails>
        </FavoriteBoxBottom>
      </FavoriteBoxWrap>
    </StyledFavoriteItem>
  );
};

export default FavoriteItem;

//    <Link to={`/products/${product.slug}`}>
