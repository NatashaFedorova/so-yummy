
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Container from 'components/constants/Container';
import RecipePageHero from './RecipePageHero';
import RecipeInngredientsList from './RecipeInngredientsList';
import RecipePreparation from './RecipePreparation';

import { selectRecipeById } from "../../redux/recipes/selectors/selectRecipeById"
import { getRecipeById } from '../../redux/recipes/operations/getRecipeById';

const Recipe = () => {
  const dispatch = useDispatch();

  const recipeId = "640cd5ac2d9fecf12e889828";

  useEffect(() => {
    dispatch(getRecipeById(recipeId))
  }, [dispatch])

  const Recipe = useSelector(selectRecipeById)

  // console.log("hello2 ", Recipe)
  return (
    <>
      {Recipe &&
        (
          <>
            <RecipePageHero title={Recipe.title} time={Recipe.time} description={Recipe.description} />
            <Container>
              <RecipeInngredientsList measurre={Recipe.ingredients} info={Recipe.ingredientsData} />
              <RecipePreparation instructions={Recipe.instructions} img={Recipe.thumb} title={Recipe.title} />
            </Container>
          </>
        )
      }
    </>
  );
};

export default Recipe;

// title={Recipe.title} time={Recipe.time} description={Recipe.description} 

// instructions={Recipe.instructions} img={Recipe.thumb} 