import { RecipeCard, RecipeImg, RecipeTitle, List } from './RecipesList.styled';
import Loading from 'components/Loading/Loading';

const RecipesList = ({ recipes, status }) => {
  if (status === 'idle') {
    return;
  }
  if (status === 'rejected') {
    return (
      <>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/errorPageNotFound/pileOfFruits.jpg `}
            alt="Not Found"
          />
          <p>Try looking for something else..</p>
        </div>
      </>
    );
  }
  if (status === 'resolved' || status === 'pending') {
    return (
      <>
        <List>
          {recipes.map(({ thumb, title, _id }) => (
            <RecipeCard key={_id}>
              <RecipeImg src={thumb} alt={title} />
              <RecipeTitle>{title}</RecipeTitle>
            </RecipeCard>
          ))}
        </List>
        {status === 'pending' && <Loading />}
      </>
    );
  }
};

export default RecipesList;
