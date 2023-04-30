import { useSelector } from 'react-redux';

import { selectMyRecipesItem } from 'redux/myRecipes/myRecipesSelectors';
import { StyledFavoriteList } from '../FavoriteList/FavoriteList.styled';
import MyRecipesItem from 'components/MyRecipesItem/MyRecipesItem';

const MyRecipesList = () => {
  const items = useSelector(selectMyRecipesItem);

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