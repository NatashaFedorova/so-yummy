import {
  List,
  NotFoundBox,
  NotFoundImg,
  NotFoundText,
} from './RecipesList.styled';
import Loading from 'components/Loading/Loading';
import { PagePagination } from 'components/Pagination/Pagination';
import { Link } from 'react-router-dom';
import CardRecipe from 'components/CardRecipe/CardRecipe';

const RecipesList = ({ recipes, status, page, handlePageChange, getLimit }) => {
  const totalPages = recipes[0]?.totalCount;
  const cardsPerPage = 12;

  if (status === 'idle') {
    return;
  }
  if (status === 'rejected') {
    return (
      <>
        <NotFoundBox>
          <NotFoundImg
            src={`${process.env.PUBLIC_URL}/images/errorPageNotFound/pileOfFruits.jpg `}
            alt="Not Found"
          />
          <NotFoundText>Try looking for something else..</NotFoundText>
        </NotFoundBox>
      </>
    );
  }
  if (status === 'resolved' || status === 'pending') {
    return (
      <>
        <List>
          {recipes.map(item => (
            <Link to={`/recipe/${item._id}`} key={item._id}>
              <CardRecipe key={item._id} item={item} />
            </Link>
          ))}
        </List>
        {totalPages > 12 && (
          <PagePagination
            totalPages={totalPages}
            cardsPerPage={cardsPerPage}
            currentPage={page}
            handlePageChange={handlePageChange}
          />
        )}
        {status === 'pending' && <Loading />}
      </>
    );
  }
};

export default RecipesList;
