import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getRecipesByCategory = createAsyncThunk(
  'recipes/getRecipesByCategory',
  async ({ categoryName, page }, thunkAPI) => {
    try {
      const res = await axios.get(`recipes/category/${categoryName}`,
        {
        params: { page: page }
        });
      return res.data
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export default getRecipesByCategory;
