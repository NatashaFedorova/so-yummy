import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Container from 'components/constants/Container/Container.styled';
import Loading from 'components/Loading/Loading';
import {
  FavoriteSection,
  FavoritePlugImg,
  FavoritePlugText,
  FavoritePlugNavLink,
} from 'components/Favorite/Favorite.styled';
import FavoriteList from 'components/FavoriteList/FavoriteList';
import { getFavorite } from 'redux/favorite/favoriteOperation';
import {
  selectFavoriteIsLoading,
  selectFavoriteItems,
} from 'redux/favorite/favoriteSelectors';
import { PagePagination } from 'components/Pagination/Pagination';
import MainTitle from 'components/MainTitle/MainTitle';

const FavoritePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectFavoriteIsLoading);
  const favoriteItems = useSelector(selectFavoriteItems);
  const [render, setRender] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;
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
      <FavoriteSection>
        <Container>
          <MainTitle title={'Favorites'} />
          {isFavoriteListEmpty ? (
            <>
              <FavoritePlugImg />
              <FavoritePlugText>
                Favorite list is empty, but you can choose your favorite recipe
                on{' '}
                <FavoritePlugNavLink to="/categories/beef">
                  Categories
                </FavoritePlugNavLink>{' '}
                page
              </FavoritePlugText>
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

// {/* <MainTitle title={"Favorites"} paddingBottom={400} /> */}
