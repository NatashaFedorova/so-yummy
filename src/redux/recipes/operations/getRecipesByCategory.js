import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getRecipesByCategory = createAsyncThunk(
  'recipes/getRecipesByCategory',
  async (categoryName, thunkAPI) => {
    try {
      const res = await axios.get(`recipes/category/${categoryName}`);
      console.log(res.data, res, "catName");
      return res.data
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export default getRecipesByCategory;
