import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://t2d-soyammy-backend.onrender.com/api/';

export const getMyRecipes = createAsyncThunk(
  'myRecipes/getMyRecipes',
  async (page, thunkAPI) => {
    if (!page) page = 1;
    try {
      const res = await axios.get(`/ownrecipes/?page=${page}&limit=4`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addMyRecipes = createAsyncThunk(
  'myRecipes/addMyRecipes',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('ownrecipes', credentials, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      Notify.success('New recipe was successfully added');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteMyRecipes = createAsyncThunk(
  'myRecipes/deleteMyRecipes',
  async (recipeId, thunkAPI) => {
    try {
      const res = await axios.delete(`/ownrecipes/${recipeId}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const clearMyRecipes = createAsyncThunk(
  'favorite/clearMyRecipes',
  async (_, thunkAPI) => {
    return true;
  }
);
