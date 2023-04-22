import * as React from 'react';
import Container from 'components/constants/Container';
import CardRecipe from 'components/CardRecipe/CardRecipe';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import {
  MyTabPanel,
  CategoryContainer,
  AnimatedLetter,
  CategoryText,
  CategoryTabs,
  CategoryTab,
} from './Category.styled';
import { Link } from './CategoriesMUI.styled';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectCategory } from '../../redux/recipes/selectors/selectCategoryList';
import {
  selectRecipesByCategoryName,
  selectRecipesIsLoading,
} from '../../redux/recipes/selectors/selectRecipeByCategoryName';
import getCategories from 'redux/recipes/operations/getCategory';
import getRecipesByCategory from 'redux/recipes/operations/getRecipesByCategory';
import {
  CategoryDefaultSquare,
  CategoryDefaultSquareСircle,
  CategoryDefaultSquareSecond,
} from './Category.styled';
import Loading from '../Loading/Loading';

const Categories = () => {
  const { categoryName: name } = useParams();
  const dispatch = useDispatch();
  const categories = useSelector(selectCategory);
  const dishes = useSelector(selectRecipesByCategoryName);
  const isLoad = useSelector(selectRecipesIsLoading);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRecipesByCategory(name));
  }, [name, dispatch]);

  const categoryIndex = categories.findIndex(item => {
    console.log(name.toLowerCase() === item.toLowerCase());
    return item.toLowerCase() === name.toLowerCase();
  });

  const TabPanel = dishes => {
    if (!dishes) {
      return <div>Have not dishes in Category</div>;
    }

    return (
      <>
        {dishes.map(item => {
          return (
            <Link to={`/recipe/${item._id}`}>
              <CardRecipe key={item._id} item={item} />
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
            aria-label="basic tabs example"
            variant="scrollable"
            scrollButtons="auto"
          >
            {categories.map((name, index) => {
              return (
                <CategoryTab
                  label={name}
                  key={index}
                  component={Link}
                  to={`/categories/${name}`}
                />
              );
            })}
          </CategoryTabs>
        </Box>
        <MyTabPanel> {isLoad ? <Loading /> : TabPanel(dishes)}</MyTabPanel>
      </>
    </Container>
  );
};

export default Categories;
