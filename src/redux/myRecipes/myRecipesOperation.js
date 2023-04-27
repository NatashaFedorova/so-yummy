import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://t2d-soyammy-backend.onrender.com/api/';

export const getMyRecipes = createAsyncThunk(
  'myrecipes/getMyRecipes',
  async (page, thunkAPI) => {
    try {
      const res = await axios.get(`/ownrecipes/?page=${page}&limit=4`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addMyRecipes = createAsyncThunk(
  'myrecipes/addMyRecipes',
  async (thunkAPI) => {
    try {
      const res = await axios.post(`/ownrecipes/`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteMyRecipes = createAsyncThunk(
  'myrecipes/deleteMyRecipes',
  async (recipeId, thunkAPI) => {
    try {
      const res = await axios.delete(`/ownrecipes/${recipeId}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);