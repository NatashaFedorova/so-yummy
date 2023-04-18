// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getRecipesByCategoryForMainPage = createAsyncThunk(
  '',
  async (credentials, thunkAPI) => {
    try {
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export default getRecipesByCategoryForMainPage;
