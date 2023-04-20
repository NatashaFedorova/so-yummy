import * as React from 'react';
import Container from 'components/constants/Container';
import CardRecipe from 'components/CardRecipe/CardRecipe';
// import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import {
  MyTabPanel,
  CategoryContainer,
  AnimatedLetter,
  CategoryText,
} from './Category.styled';
import {
  Link,
  CategoryTab,
  CategoryTabs,
  // MyTabPanel,
} from './CategoriesMUI.styled';
import { getCategory, getDishes } from './Data.jsx';
import {
  CategoryDefaultSquare,
  CategoryDefaultSquareСircle,
  CategoryDefaultSquareSecond,
} from './Category.styled';

// http://localhost:3000/so-yummy/categories/1

const Categories = () => {
  const { categoryName: id } = useParams();
  // if (!useParams()) {
  //   const defaultId = 1;
  //   return defaultId;
  // }
  // const defaultId = 1;
  // const myId = id || defaultId;
  const dishes = getDishes();
  const categories = getCategory();
  console.log(id, categories, 'cat', dishes);
  const categoryIndex = categories.findIndex(item => item.id === Number(id));
  console.log(categoryIndex);

  const TabPanel = id => {
    const dishesRender = dishes.filter(item => {
      // console.log(item, Number(id));
      return item.id === Number(id);
    });
    const dishesFoRender = dishesRender[0].title;
    if (!dishesFoRender) {
      return <div>Have not dishes in Category</div>;
    }
    return (
      <>
        {dishesFoRender.map((item, index) => {
          return (
            <Link>
              <CardRecipe key={index} item={item} />
            </Link>
          );
        })}
      </>
    );
  };
  const categoryText = 'Categories';
  return (
    <Container>
      <>
        <CategoryContainer>
          <CategoryDefaultSquare />
          <CategoryDefaultSquareСircle />
          <CategoryDefaultSquareSecond />
          <CategoryText>
            {categoryText.split('').map((letter, index) => (
              <AnimatedLetter key={index} index={index}>
                {letter}
              </AnimatedLetter>
            ))}
          </CategoryText>
        </CategoryContainer>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <CategoryTabs
            value={categoryIndex}
            // onChange={handleChange}
            aria-label="basic tabs example"
            variant="scrollable"
            scrollButtons="auto"
          >
            {categories.map(({ name, id }) => {
              return (
                <CategoryTab
                  label={name}
                  key={id}
                  component={Link}
                  to={`/categories/${id}`}
                />
              );
            })}
          </CategoryTabs>
        </Box>
        <MyTabPanel>{TabPanel(id)}</MyTabPanel>
      </>
    </Container>
  );
};

export default Categories;
