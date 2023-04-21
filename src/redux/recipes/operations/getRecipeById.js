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

axios.defaults.baseURL = "https://t2d-soyammy-backend.onrender.com/api/"

export const getRecipeById = createAsyncThunk('recipeById', async (recipeId, thunkAPI) => {
  const { data } = await axios.get(`/recipes/${recipeId}`);
  return data;
})

export const addToFavorite = createAsyncThunk(
  "addtoFavorite",
  async (_, thunkAPI) => {
    try {
      setTimeout(() => {
        return console.log(true);
      }, "2000");

    } catch (err) {
      return err.message;
    }
  }
);