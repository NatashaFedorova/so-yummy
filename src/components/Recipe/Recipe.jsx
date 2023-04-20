import Container from 'components/constants/Container';
import RecipePageHero from './RecipePageHero';
import RecipeInngredientsList from './RecipeInngredientsList';
import RecipePreparation from './RecipePreparation';

const Recipe = () => {
  return (
    <>
      <RecipePageHero />
      <Container>
        <RecipeInngredientsList />
        <RecipePreparation />
      </Container>
    </>
  );
};

export default Recipe;
