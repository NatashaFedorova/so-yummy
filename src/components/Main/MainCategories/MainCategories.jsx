import * as React from 'react';

// import Container from 'components/constants/Container';

import CardRecipe from '../../CardRecipe/CardRecipe';

import { useDispatch, useSelector } from 'react-redux';
import {
  // useState,
  useEffect,
} from 'react';
// import Box from '@mui/material/Box';
// import { useParams } from 'react-router-dom';

import { getRecipesForMain } from 'redux/recipes/selectors/selectCategoriesMain';

import { MyTabPanel } from '../../Categories/Category.styled';
import { Link } from './MainCategories.styled';
import {
  // getCategory,
  getDishes,
} from '../../Categories/Data';
import getRecipesByCategoryForMainPage from '../../../redux/recipes/operations/getRecipesByCategoryForMainPage';

const MainCategories = () => {
  const mainRecipes = useSelector(getRecipesForMain);
  const dispatcher = useDispatch();

  useEffect(() => {
    if (mainRecipes !== null) return;
    dispatcher(getRecipesByCategoryForMainPage());
  }, [dispatcher, mainRecipes]);

  const dishes = getDishes();

  const TabPanel = () => {
    // const dishesRender = dishes.filter(item => {
    //   // console.log(item, Number(id));
    //   return item.id === Number(id);
    // });
    const dishesFoRender = dishes[1].title;
    if (!dishesFoRender) {
      return <div>Have not dishes in Category</div>;
    }
    return (
      <>
        {dishesFoRender.map((item, index) => {
          return (
            <Link key={index}>
              <CardRecipe key={index} item={item} />
            </Link>
          );
        })}
      </>
    );
  };

  return (
    <>
      <h2>Breakfast</h2>
      <MyTabPanel>{TabPanel()}</MyTabPanel>
    </>
  );
};

export default MainCategories;
