import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
//import { useState } from 'react';

import { useParams } from "react-router-dom";

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
import { addRecipeTofavorite } from '../../redux/recipes/operations/getRecipeById';

const Recipe = () => {
  const dispatch = useDispatch();

  const { recipeId } = useParams()

  //const recipeId = '640f3c097eca20453198dfae';
  // const [favoriteBtn, setfavoriteBtn] = useState(false);

  useEffect(() => {
    dispatch(getRecipeById(recipeId));
  }, [dispatch, recipeId]);

  const Recipe = useSelector(selectRecipeById);
  const Status = useSelector(selectRecipeByIdStatus);

  // const addRcpToFavorite = () => {
  //   dispatch(addToFavorite());
  //   setfavoriteBtn(true);
  // };

  const AddToFavor = () => {
    const InfoForBackend = {
      recipeId: recipeId,
    }
    dispatch(addRecipeTofavorite(InfoForBackend))
  }


  //console.log("Recipe All ", Recipe)
  //console.log("Status ?  ", Status)


  return (
    <>
      {(Status === STATUS.idle || Status === STATUS.loading) && <Loading />}
      <div style={{ minHeight: '500px' }}>
        {Status === STATUS.success && (
          <>
            <RecipePageHero
              // btnState={favoriteBtn}
              onBtnClick={() => AddToFavor()}
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
