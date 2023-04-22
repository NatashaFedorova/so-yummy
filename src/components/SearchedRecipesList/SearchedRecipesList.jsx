import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import RecipesList from 'components/RecipesList/RecipesList';

const fetchRecepies = async params => {
  try {
    const response = await axios(
      `https://t2d-soyammy-backend.onrender.com/api/ingredients?query=${params}`
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const SearchedRecepiesList = () => {
  const [recipes, setRecipes] = useState(null);
  const [searchParams] = useSearchParams();
  const params = searchParams.get('filter') ?? '';
  useEffect(() => {
    const fetch = async () => {
      const response = await fetchRecepies(params);
      setRecipes(response)
    };
    fetch();
  }, [params]);
  return <>
    <RecipesList recipes = {recipes}/>
  </>
};

export default SearchedRecepiesList;
