const {
  StyledFavoriteItem,
  FavoriteImg,
  FavoriteBoxWrap,
  FavoriteBoxTop,
  FavoriteBoxCenter,
  FavoriteBoxBottom,
  FavoriteTitle,
  FavoriteBtnDelete,
  FavoriteDesc,
  FavoriteTime,
  FavoriteBtnDetails,
} = require('./FavoriteItem.styled');

const FavoriteItem = () => {
  return (
    <StyledFavoriteItem>
      <FavoriteImg
        src="./images/temp/favorite-img.jpg"
        alt=""
        width={124}
        height={124}
      />
      <FavoriteBoxWrap>
        <FavoriteBoxTop>
          <FavoriteTitle>Salmon Eggs Benedict</FavoriteTitle>
          <FavoriteBtnDelete type='button'/>
        </FavoriteBoxTop>
        <FavoriteBoxCenter>
          <FavoriteDesc>
            Salmon eggs are rich in essential nutrients, low in calories, and recommended as part of a healthy diet. Including salmon in a balanced diet can help decrease the chances of heart disease, ease inflammation, and more.           </FavoriteDesc>
        </FavoriteBoxCenter>
        <FavoriteBoxBottom>
          <FavoriteTime>20 min</FavoriteTime>
          <FavoriteBtnDetails>See reecipe</FavoriteBtnDetails>
        </FavoriteBoxBottom>
      </FavoriteBoxWrap>
    </StyledFavoriteItem>
  );
};

export default FavoriteItem;
