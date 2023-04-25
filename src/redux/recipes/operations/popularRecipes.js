import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const popularRecipes = createAsyncThunk(
  'recipes/getPopularRecipes',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`recipes/popular-recipe`);
      const popularRecipesData = res.data.map(
        ({ _id, title, description, preview }) => ({
          _id,
          title,
          description,
          preview,
        })
      );
      return popularRecipesData;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export default popularRecipes;
