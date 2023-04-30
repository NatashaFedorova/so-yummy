import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

import {
  getRecipesForMain,
  getStatusForMain,
} from 'redux/recipes/selectors/selectCategoriesMain';

import {
  MainCategoriesRow,
  MainCategoriesTitle,
  MainCategoriesBtnWrapper,
  MainCategoriesBtn,
} from './MainCategories.styled';

import MainCategoriesList from '../MainCategoriesList/MainCategoriesList';
import {
  MainContentLoader,
  MainContentLoaderTablet,
  MainContentLoaderMobile,
} from '../ContentLoader/ContentLoader';

import getRecipesByCategoryForMainPage from '../../../redux/recipes/operations/getRecipesByCategoryForMainPage';

const MainCategories = () => {
  const mainRecipes = useSelector(getRecipesForMain);
  const mainStatus = useSelector(getStatusForMain);
  const dispatcher = useDispatch();

  const desktopScreen = useMediaQuery({ minWidth: 1440 });
  const tabletScreen = useMediaQuery({ minWidth: 768, maxWidth: 1439 });

  let cardsOnScreen = null;

  desktopScreen === true
    ? (cardsOnScreen = 4)
    : tabletScreen === true
    ? (cardsOnScreen = 2)
    : (cardsOnScreen = 1);

  useEffect(() => {
    if (mainRecipes !== null) return;
    dispatcher(getRecipesByCategoryForMainPage());
  }, [dispatcher, mainRecipes]);

  const filteredItems = useMemo(() => {
    const allowedCategories = [
      'breakfast',
      'chicken',
      'miscellaneous',
      'dessert',
    ];
    return allowedCategories
      .map(category =>
        mainRecipes?.find(item => item._id.toLowerCase() === category)
      )
      .filter(Boolean);
  }, [mainRecipes]);

  return (
    <ul>
      {mainStatus === 'idle' &&
        (desktopScreen ? (
          <MainContentLoader />
        ) : tabletScreen ? (
          <MainContentLoaderTablet />
        ) : (
          <MainContentLoaderMobile />
        ))}

      {mainStatus === 'loading' ? (
        desktopScreen ? (
          <MainContentLoader />
        ) : tabletScreen ? (
          <MainContentLoaderTablet />
        ) : (
          <MainContentLoaderMobile />
        )
      ) : (
        filteredItems?.map(({ _id, recipes }) => (
          <MainCategoriesRow key={_id}>
            <MainCategoriesTitle to={`/categories/${_id}`}>
              {_id}
            </MainCategoriesTitle>
            <MainCategoriesList
              mainRecipes={recipes}
              cardsOnScreen={cardsOnScreen}
            />
            <MainCategoriesBtnWrapper>
              <MainCategoriesBtn to={`/categories/${_id}`}>
                See all
              </MainCategoriesBtn>
            </MainCategoriesBtnWrapper>
          </MainCategoriesRow>
        ))
      )}
    </ul>
  );
};

export default MainCategories;
