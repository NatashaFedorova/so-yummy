import { useSelector } from 'react-redux';

import { selectFavoriteItems } from 'redux/favorite/favoriteSelectors';
import { StyledFavoriteList } from './FavoriteList.styled';
import FavoriteItem from 'components/FavoriteItem/FavoriteItem';

const FavoriteList = () => {
  const items = useSelector(selectFavoriteItems);

  return (
    <StyledFavoriteList >
      {items.map(({ _id, title, preview, description, instructions, time }) => (
        <FavoriteItem key={_id} favoriteRecipe={{ _id, title, preview, description, instructions, time }} />
      ))}
    </StyledFavoriteList>
  );
};

export default FavoriteList;