import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Container from 'components/constants/Container/Container.styled';
import Loading from 'components/Loading/Loading';
import { FakeMainPageTitle, FakeMainPageTitleWrap, FavoriteSection } from 'components/Favorite/Favorite.styled';
import { getFavorite } from 'redux/favorite/favoriteOperation';
import { selectFavoriteIsLoading } from 'redux/favorite/favoriteSelectors';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';

const MyRecipesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectFavoriteIsLoading);

  useEffect(() => {
    dispatch(getFavorite());
  }, [dispatch]);

  return (
      <>
        {isLoading && <Loading />}
        <FavoriteSection >
          <Container>
            <FakeMainPageTitleWrap>
              <FakeMainPageTitle>My recipes (temporary my favorite)</FakeMainPageTitle>
            </FakeMainPageTitleWrap>
            <MyRecipesList />
            {/* <PagePagination
              totalPages={totalPages}
              cardsPerPage={cardsPerPage}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            /> */}
          </Container>
        </FavoriteSection>
      </>
    );
  };
  
  export default MyRecipesPage;
