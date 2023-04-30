import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getCategories = createAsyncThunk(
  'categories/getCat',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('recipes/category-list');
      return res.data;
    } catch (e) {
      return thunkAPI.fulfillWithValue(e.message);
    }
  }
);

export default getCategories;
