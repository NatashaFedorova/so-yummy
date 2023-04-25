import { useSelector } from 'react-redux';

import { StyledFavoriteList } from '../FavoriteList/FavoriteList.styled';
import { selectFavoriteItems } from 'redux/favorite/favoriteSelectors';
import MyRecipesItem from 'components/MyRecipesItem/MyRecipesItem';

const MyRecipesList = () => {
  const items = useSelector(selectFavoriteItems);

  return (
    <>
      <StyledFavoriteList>
        {items.map(({ _id, title, preview, description, instructions, time }) => (
          <MyRecipesItem key={_id} favoriteRecipe={{ _id, title, preview, description, instructions, time }} />
        ))}
      </StyledFavoriteList>
    </>
  );
};

export default MyRecipesList;