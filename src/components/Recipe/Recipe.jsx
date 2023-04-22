import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

import Container from 'components/constants/Container';
import { STATUS } from '../constants/loadingStatus/LoadingStatus';
import Loading from 'components/Loading/Loading';

import RecipePageHero from './RecipePageHero';
import RecipeInngredientsList from './RecipeInngredientsList';
import RecipePreparation from './RecipePreparation';

import {
  selectRecipeById,
  selectRecipeByIdStatus,
} from '../../redux/recipes/selectors/selectRecipeById';
import { getRecipeById } from '../../redux/recipes/operations/getRecipeById';
import { addToFavorite } from '../../redux/recipes/operations/getRecipeById';

const Recipe = () => {
  const dispatch = useDispatch();

  const recipeId = '640cd5ac2d9fecf12e88986a';

  const Recipe = useSelector(selectRecipeById);
  const Status = useSelector(selectRecipeByIdStatus);

  const [favoriteBtn, setfavoriteBtn] = useState(false);

  useEffect(() => {
    dispatch(getRecipeById(recipeId));
  }, [dispatch]);

  const addRcpToFavorite = () => {
    dispatch(addToFavorite());
    setfavoriteBtn(true);
  };

  //console.log("Recipe All ", Recipe)
  //console.log("minHeight: '300px'  ", Status)

  return (
    <>
      {(Status === STATUS.idle || Status === STATUS.loading) && <Loading />}
      <div style={{ minHeight: '500px' }}>
        {Recipe && (
          <>
            <RecipePageHero
              btnState={favoriteBtn}
              onBtnClick={() => addRcpToFavorite()}
              title={Recipe.title}
              time={Recipe.time}
              description={Recipe.description}
            />
            <Container>
              <RecipeInngredientsList info={Recipe.ingredients} />
              <RecipePreparation
                instructions={Recipe.instructions}
                img={Recipe.thumb}
                title={Recipe.title}
              />
            </Container>
          </>
        )}
      </div>
    </>
  );
};

export default Recipe;

// loader extra styles{

//   z-index: 5000;
//   position: absolute;
//   left: calc(50% - 50px);
//   top: 45%;
// }
