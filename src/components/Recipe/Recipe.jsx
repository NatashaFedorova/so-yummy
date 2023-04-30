import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Container from 'components/constants/Container';
import { STATUS } from '../constants/loadingStatus/LoadingStatus';

import RecipePageHero from './RecipePageHero';
import RecipeInngredientsList from './RecipeInngredientsList';
import RecipePreparation from './RecipePreparation';

import {
  selectRecipeById,
  selectRecipeByIdStatus,
} from '../../redux/recipes/selectors/selectRecipeById';

import { getRecipeById } from '../../redux/recipes/operations/getRecipeById';
import {
  addFavorite,
  deleteFavorite,
} from '../../redux/favorite/favoriteOperation';
import { refreshUserLite } from '../../redux/auth/authOperation';
import { selectUser } from '../../redux/auth/authSelectors';

const Recipe = () => {
  const dispatch = useDispatch();

  const { recipeId } = useParams();

  const [render, setRender] = useState(1);
  const [isSubLoading, setIsSubLoading] = useState(false);

  const Recipe = useSelector(selectRecipeById);
  const Status = useSelector(selectRecipeByIdStatus);
  const { id, shoppingList } = useSelector(selectUser);

  useEffect(() => {
    if (render) {
      setRender(0);
      return;
    }
    dispatch(getRecipeById(recipeId));
  }, [dispatch, recipeId, render, setRender]);

  const addRcpToFavorite = async () => {
    setIsSubLoading(true);
    await dispatch(addFavorite(recipeId));
    await dispatch(getRecipeById(recipeId));
    await dispatch(refreshUserLite());
    setIsSubLoading(false);
  };

  const removeRcpFromFavorite = async () => {
    setIsSubLoading(true);
    await dispatch(deleteFavorite(recipeId));
    await dispatch(getRecipeById(recipeId));
    await dispatch(refreshUserLite());
    setIsSubLoading(false);
  };

  const isRecipeFavor = Recipe.favorites;
  let ButtonState = Recipe.favorites;

  if (isRecipeFavor) {
    const hasRecipeFavorites = isRecipeFavor
      .flatMap(item => item.userId)
      .some(value => value === id);
    ButtonState = hasRecipeFavorites;
  }

  return (
    <>
      <div style={{ minHeight: '65vh' }}>
        {Status === STATUS.success && (
          <>
            <RecipePageHero
              isloading={isSubLoading}
              btnState={ButtonState}
              onBtnClickAdd={() => addRcpToFavorite(recipeId)}
              onBtnClickRemove={() => removeRcpFromFavorite(recipeId)}
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
                img={Recipe.preview}
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
