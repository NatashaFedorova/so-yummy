import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getCategoryListAPI = () => {
  return axios.get('/recipes/category-list').then(({ data }) => {
    return data;
  });
};

const getCategoryList = createAsyncThunk(
  'mainCategories/getCategoryList',
  async (_, thunkAPI) => {
    try {
      const data = await getCategoryListAPI();

      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export default getCategoryList;
