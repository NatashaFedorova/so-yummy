import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getMainCategoriesAPI = () => {
  return axios.get('/recipes/main-page').then(({ data }) => {
    return data;
  });
};

const getRecipesByCategoryForMainPage = createAsyncThunk(
  'mainCategories/getRecipesMain',
  async (_, thunkAPI) => {
    try {
      const data = await getMainCategoriesAPI();

      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export default getRecipesByCategoryForMainPage;
