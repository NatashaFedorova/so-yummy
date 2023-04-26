import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
//import { useState } from 'react';
import { useParams } from 'react-router-dom';

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
import { addFavorite } from '../../redux/favorite/favoriteOperation';

import { selectUser } from '../../redux/auth/authSelectors';

const Recipe = () => {
  const dispatch = useDispatch();

  const { recipeId } = useParams();
  //const [isRecipeFavorite, setIsRecipeFavorite] = useState(false);

  const Recipe = useSelector(selectRecipeById);
  const Status = useSelector(selectRecipeByIdStatus);
  const { id, shoppingList } = useSelector(selectUser);

  useEffect(() => {
    dispatch(getRecipeById(recipeId));
  }, [dispatch, recipeId]);

  const addRcpToFavorite = async () => {
    await dispatch(addFavorite(recipeId));
    await dispatch(getRecipeById(recipeId));
    //await setIsRecipeFavorite(true);
  };

  const isRecipeFavor = Recipe.favorites;
  let ButtonState = Recipe.favorites;

  if (isRecipeFavor) {
    const hasRecipeFavorites = isRecipeFavor
      .flatMap(item => item.userId)
      .some(value => value === id);
    ButtonState = hasRecipeFavorites;
  }

  //console.log('is hier Favorites fild', Recipe);

  return (
    <>
      {(Status === STATUS.idle || Status === STATUS.loading) && <Loading />}
      <div style={{ minHeight: '500px' }}>
        {Status === STATUS.success && (
          <>
            <RecipePageHero
              btnState={ButtonState}
              onBtnClick={() => addRcpToFavorite(recipeId)}
              title={Recipe.title}
              time={Recipe.time}
              description={Recipe.description}
            />
            <Container>
              <RecipeInngredientsList
                info={Recipe.ingredients}
                recId={recipeId}
                shopList={shoppingList}
              />
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


