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
import { useEffect, useState } from 'react';
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
import { PagePagination } from '../Pagination/Pagination';
// import { CategoryContentLoad } from './CategoryContentLoad';
// import { useMediaQuery } from 'react-responsive';

const Categories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { categoryName: name } = useParams();
  const dispatch = useDispatch();
  const categories = useSelector(selectCategory);
  const dishesElement = useSelector(selectRecipesByCategoryName);
  const dishes = dishesElement;
  const isLoad = useSelector(selectRecipesIsLoading);
  const cardsPerPage = 8;
  const totalPages = dishesElement.length > 0 ? dishesElement[0].totalCount : 8;

  // const desktopScreen = useMediaQuery({ minWidth: 1440 });
  // const tabletScreen = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  // let cardsOnScreen = null;
  // desktopScreen === true
  //   ? (cardsOnScreen = 4)
  //   : tabletScreen === true
  //   ? (cardsOnScreen = 2)
  //   : (cardsOnScreen = 1);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [name]);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRecipesByCategory({ categoryName: name, page: currentPage }));
  }, [name, dispatch, currentPage]);

  const categoryIndex = categories.findIndex(item => {
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
            {categories.map(name => {
              return (
                <CategoryTab
                  label={name}
                  key={name}
                  component={Link}
                  to={`/categories/${name}`}
                />
              );
            })}
          </CategoryTabs>
        </Box>
        <MyTabPanel>{isLoad ? <Loading /> : TabPanel(dishes)}</MyTabPanel>
        {totalPages > 12 && (
          <PagePagination
            totalPages={totalPages}
            cardsPerPage={cardsPerPage}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        )}
      </>
    </Container>
  );
};

export default Categories;
