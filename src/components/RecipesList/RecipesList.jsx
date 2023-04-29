import {
  RecipeCard,
  RecipeImg,
  RecipeTitle,
  List,
  NotFoundBox,
  NotFoundImg,
  NotFoundText,
} from './RecipesList.styled';
import Loading from 'components/Loading/Loading';
import { PagePagination } from 'components/Pagination/Pagination';
import { Link } from 'react-router-dom';

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
          {recipes.map(({ thumb, title, _id }) => (
            <RecipeCard key={_id}>
              <Link to={`/recipe/${_id}`}>
                <RecipeImg src={thumb} alt={title} />
                <RecipeTitle>{title}</RecipeTitle>
              </Link>
            </RecipeCard>
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
