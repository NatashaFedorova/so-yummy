import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import selectStatusTheme from 'redux/theme/selectors';

import Container from "components/constants/Container/Container.styled";
import Loading from "components/Loading/Loading";
import { FavoriteSection, FakeMainPageTitle, FakeMainPageTitleWrap, FakeMainPageTitleWrapDark, FavoritePlugImg, FavoritePlugText, FavoritePlugNavLink } from "components/Favorite/Favorite.styled";
import FavoriteList from "components/FavoriteList/FavoriteList";
import { getFavorite } from 'redux/favorite/favoriteOperation';
import { selectFavoriteIsLoading, selectFavoriteItems } from 'redux/favorite/favoriteSelectors';
import { PagePagination } from 'components/Pagination/Pagination';

const FavoritePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectFavoriteIsLoading);
  const [render, setRender] = useState(1);
  const isThemeDark = useSelector(selectStatusTheme);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;
  const favoriteItems = useSelector(selectFavoriteItems);
  const isFavoriteListEmpty = !Boolean(favoriteItems.length);
  const totalPages = favoriteItems.length > 0 ? favoriteItems[0].totalCount : 1;

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (render) { 
      setRender(0); 
      return;
    }
    dispatch(getFavorite(currentPage));
  }, [dispatch, currentPage, render, setRender]);

  return (
    <>
    {isLoading && <Loading />}
    <FavoriteSection >
      <Container>
        {!isThemeDark && <FakeMainPageTitleWrap><FakeMainPageTitle>Favorites</FakeMainPageTitle></FakeMainPageTitleWrap>}
        {isThemeDark && <FakeMainPageTitleWrapDark><FakeMainPageTitle>Favorites</FakeMainPageTitle></FakeMainPageTitleWrapDark>}
        {isFavoriteListEmpty ? (
          <>
            <FavoritePlugImg />
            <FavoritePlugText>Favorite list is empty, but you can choose your favorite recipe on <FavoritePlugNavLink to="/categories/beef">Categories</FavoritePlugNavLink> page</FavoritePlugText>
          </>
        ) : (
          <>
            <FavoriteList />
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

export default FavoritePage;
