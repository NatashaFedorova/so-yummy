import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getCategories = createAsyncThunk(
  'ingredients/getCategories',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`recipes/category-list`);
      const data = res.data.map(item => ({
        value: item,
        label: item,
        id: item,
      }));

      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export default getCategories;
