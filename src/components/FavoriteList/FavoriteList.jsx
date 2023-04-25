import { useSelector } from 'react-redux';

import FavoriteItem from 'components/FavoriteItem/FavoriteItem';
import { StyledFavoriteList } from './FavoriteList.styled';
import { selectFavoriteItems } from 'redux/favorite/favoriteSelectors';

const FavoriteList = () => {
  const items = useSelector(selectFavoriteItems);

  return (
    <>
      <StyledFavoriteList >
        {items.map(({ _id, title, preview, description, instructions, time }) => (
          <FavoriteItem key={_id} favoriteRecipe={{ _id, title, preview, description, instructions, time }} />
        ))}
      </StyledFavoriteList>
    </>
  );
};

export default FavoriteList;

// TODO - add h2 <FavoriteListTitle /> - with vis hidden 
