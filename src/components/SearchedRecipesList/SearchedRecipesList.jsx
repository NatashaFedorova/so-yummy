import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import getRecepiesByTitle from 'redux/recipes/operations/getRecipesByTitle';
import RecipesList from 'components/RecipesList/RecipesList';
import getRecipesByIngredient from 'redux/recipes/operations/getRecipesByIngredient';

const SearchedRecepiesList = ({ searhType }) => {
  const [status, setStatus] = useState('idle');
  const [recipes, setRecipes] = useState(null);
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const params = searchParams.get('filter') ?? '';

  useEffect(() => {
    if (!params) {
      setStatus('idle');
      return;
    }
    setPage(1)
    setStatus('pending');

    const fetch = async () => {
      if (searhType === 'Ingredients') {
        const responseByIngridients = await getRecipesByIngredient(params, page);
        setRecipes(responseByIngridients);
        setStatus('resolved');
      }
      if (searhType === 'Title') {
        const responseByTitle = await getRecepiesByTitle(params, page);

        setRecipes(responseByTitle);
        setStatus('resolved');

        if (!responseByTitle || responseByTitle.length <= 1) {
          setStatus('rejected');
        }
      }
    };
    fetch();
  }, [params, page, searhType, recipes?.length]);
  if (!recipes) {
    return;
  }
  return (
    <>
      <RecipesList status={status} recipes={recipes} />
    </>
  );
};

export default SearchedRecepiesList;
