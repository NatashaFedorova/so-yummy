// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// const getRecipeById = createAsyncThunk('', async (credentials, thunkAPI) => {
//   try {
//   } catch ({ message }) {
//     return thunkAPI.rejectWithValue(message);
//   }
// });

// export default getRecipeById;

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getRecipeById = createAsyncThunk('recipeById', async (recipeId, thunkAPI) => {
  const { data } = await axios.get(`/recipes/${recipeId}`);
  return data;
})

export const addToFavorite = createAsyncThunk('favorite', async (recipeId, thunkAPI) => {
  const { data } = await axios.get(`/recipes/main-page`);
  return data;
  // return true
})