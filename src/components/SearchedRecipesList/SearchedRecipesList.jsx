import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import getRecepiesByTitle from 'redux/recipes/operations/getRecipesByTitle';
import RecipesList from 'components/RecipesList/RecipesList';
import getRecipesByIngredient from 'redux/recipes/operations/getRecipesByIngredient';

const SearchedRecepiesList = ({ searhType, refDiv }) => {
  const [status, setStatus] = useState('idle');
  const [recipes, setRecipes] = useState(null);
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const params = searchParams.get('filter') ?? '';
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    if (refDiv.current) {
      const divWidth = getComputedStyle(refDiv.current).width;
      if (divWidth === '1240px') {
        setLimit(12);
      }
      if (divWidth === '704px') {
        setLimit(6);
      }
    }
  }, [setLimit, refDiv]);

  const handlePageChange = page => {
    setPage(page);
  };

  useEffect(() => {
    if (!params) {
      setStatus('idle');
      return;
    }
    setStatus('pending');

    const fetch = async () => {
      if (searhType === 'Ingredients') {
        const responseByIngridients = await getRecipesByIngredient(
          params,
          page,
          limit
        );
        setRecipes(responseByIngridients);
        setStatus('resolved');

        if (!responseByIngridients || responseByIngridients.length <= 1) {
          setStatus('rejected');
        }
      }
      if (searhType === 'Title') {
        const responseByTitle = await getRecepiesByTitle(params, page, limit);

        setRecipes(responseByTitle);
        setStatus('resolved');

        if (!responseByTitle || responseByTitle.length <= 1) {
          setStatus('rejected');
        }
      }
    };
    fetch();
  }, [params, page, searhType, recipes?.length, limit]);
  if (!recipes) {
    return;
  }
  return (
    <RecipesList
      page={page}
      handlePageChange={handlePageChange}
      status={status}
      recipes={recipes}
    />
  );
};

export default SearchedRecepiesList;
