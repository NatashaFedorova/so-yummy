import CardRecipe from '../../CardRecipe/CardRecipe';
import { Link } from '../../Categories/CategoriesMUI.styled';
import { MainRecipesList } from '../MainCategories/MainCategories.styled';

const MainCategoriesList = props => {
  const { mainRecipes, cardsOnScreen } = props;

  return (
    <MainRecipesList>
      {mainRecipes.slice(0, cardsOnScreen).map(item => {
        return (
          <Link key={item._id} to={`/recipe/${item._id}`}>
            <CardRecipe key={item._id} item={item} />
          </Link>
        );
      })}
    </MainRecipesList>
  );
};

export default MainCategoriesList;
