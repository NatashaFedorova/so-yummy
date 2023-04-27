import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectStatusTheme from 'redux/theme/selectors';

import Container from 'components/constants/Container/Container.styled';
import Loading from 'components/Loading/Loading';
import { FakeMainPageTitle, FakeMainPageTitleWrap, FakeMainPageTitleWrapDark, FavoritePlugImg, FavoritePlugNavLink, FavoritePlugText, FavoriteSection } from 'components/Favorite/Favorite.styled';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import { getMyRecipes } from 'redux/myRecipes/myRecipesOperation';
import { selectMyRecipesIsLoading, selectMyRecipesItem } from 'redux/myRecipes/myRecipesSelectors';
import { PagePagination } from 'components/Pagination/Pagination';

const MyRecipesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectMyRecipesIsLoading);
  const isThemeDark = useSelector(selectStatusTheme);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;
  const myRecipesItem = useSelector(selectMyRecipesItem);
  const isMyRecipeListEmpty = !Boolean(myRecipesItem.length);
  const totalPages = myRecipesItem.length > 0 ? myRecipesItem[0].totalCount : 1;
  
  const handlePageChange = page => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(getMyRecipes(currentPage));
  }, [dispatch, currentPage]);

  return (
      <>
        {isLoading && <Loading />}
        <FavoriteSection >
          <Container>
            {!isThemeDark && <FakeMainPageTitleWrap><FakeMainPageTitle>My recipes</FakeMainPageTitle></FakeMainPageTitleWrap>}
            {isThemeDark && <FakeMainPageTitleWrapDark><FakeMainPageTitle>My recipes</FakeMainPageTitle></FakeMainPageTitleWrapDark>}
            {isMyRecipeListEmpty ? (
              <>
                <FavoritePlugImg />
                <FavoritePlugText>Your recipes list is empty, but you can add your recipe on <FavoritePlugNavLink to="/add">Add recipe</FavoritePlugNavLink> page</FavoritePlugText>
              </>
            ) : (
              <>
                <MyRecipesList />
                <PagePagination
                  totalPages={totalPages}
                  cardsPerPage={cardsPerPage}
                  currentPage={currentPage}
                  handlePageChange={handlePageChange}
                />
              </>
            )}
          </Container>
        </FavoriteSection>
      </>
    );
  };
  
  export default MyRecipesPage;
