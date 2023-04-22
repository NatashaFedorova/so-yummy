import { PopularRecipe } from './PopularRecipeList.styled';

const PopularRecipeList = ({ items, renderItem }) => {
  return <PopularRecipe>{items.map(renderItem)}</PopularRecipe>;
};

export default PopularRecipeList;
