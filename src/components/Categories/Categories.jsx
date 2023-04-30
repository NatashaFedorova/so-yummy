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
import { getRecipesForMain } from '../../redux/recipes/selectors/selectCategoriesMain';
import getCategories from 'redux/recipes/operations/getCategory';
import getRecipesByCategory from 'redux/recipes/operations/getRecipesByCategory';
import {
  CategoryDefaultSquare,
  CategoryDefaultSquareСircle,
  CategoryDefaultSquareSecond,
} from './Category.styled';
// import Loading from '../Loading/Loading';
import { PagePagination } from '../Pagination/Pagination';
import { getCatFood } from './Helpers/CheckCat';
import { CategorySkeleton } from './CategoryContentLoad';

const Categories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { categoryName: name } = useParams();
  const dispatch = useDispatch();
  const catFromMain = useSelector(getRecipesForMain)
    ?.map(({ _id }) => _id)
    ?.sort();
  const categoriesFromFetch = useSelector(selectCategory);
  const dishesElement = useSelector(selectRecipesByCategoryName);
  const dishes = dishesElement;
  const isLoad = useSelector(selectRecipesIsLoading);
  const cardsPerPage = 8;
  const totalPages = dishesElement.length > 0 ? dishesElement[0].totalCount : 8;
  const handlePageChange = page => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [name]);

  useEffect(() => {
    if (catFromMain && catFromMain?.length > 0) {
      return;
    } else dispatch(getCategories());
  }, [dispatch, catFromMain]);

  useEffect(() => {
    dispatch(getRecipesByCategory({ categoryName: name, page: currentPage }));
  }, [name, dispatch, currentPage]);

  const categories = getCatFood(catFromMain, categoriesFromFetch);

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
        <MyTabPanel>
          {isLoad ? <CategorySkeleton /> : TabPanel(dishes)}
        </MyTabPanel>
        {totalPages > 8 && (
          <div
            style={{
              marginBottom: '200px',
              '@media (min-width: 768px)': {
                marginBottom: '100px',
              },
            }}
          >
            <PagePagination
              totalPages={totalPages}
              cardsPerPage={cardsPerPage}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        )}
      </>
    </Container>
  );
};

export default Categories;
