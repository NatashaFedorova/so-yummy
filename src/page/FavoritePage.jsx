import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Container from "components/constants/Container/Container.styled";
import Loading from "components/Loading/Loading";
import { FakeMainPageTitle, FakeMainPageTitleWrap, FavoriteSection} from "components/Favorite/Favorite.styled";
import FavoriteList from "components/FavoriteList/FavoriteList";
import { selectFavoriteIsLoading } from 'redux/favorite/favoriteSelectors';
import { getFavorite } from 'redux/favorite/favoriteOperation';
// import { PagePagination } from 'components/Pagination/Pagination';

const FavoritePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectFavoriteIsLoading);
  // const [currentPage, setCurrentPage] = useState(1);
  // const favoriteItems = useSelector(selectFavoriteItems);
  // const cardsPerPage = 4;
  // const totalPages = favoriteItems.length > 0 ? favoriteItems[0].totalCount : 8;

  // const handlePageChange = page => {
  //   setCurrentPage(page);
  // };

  useEffect(() => {
    dispatch(getFavorite());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getRecipesByCategory({ categoryName: name, page: currentPage }));
  // }, [name, dispatch, currentPage]);

  return (
    <>
    {isLoading && <Loading />}
    <FavoriteSection >
      <Container>
        <FakeMainPageTitleWrap>
          <FakeMainPageTitle>Favorites</FakeMainPageTitle>
        </FakeMainPageTitleWrap>
        <FavoriteList />
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

export default FavoritePage;
