import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://t2d-soyammy-backend.onrender.com/api/';

export const getFavorite = createAsyncThunk(
  'favorite/getFavorite',
  async (page, thunkAPI) => {
    if (!page) page = 1;
    try {
      const res = await axios.get(`/ownrecipes/favorite/?page=${page}&limit=4`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  'favorite/addFavorite',
  async (_id, thunkAPI) => {
    try {
      const res = await axios.put(`/ownrecipes/favorite/${_id}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  'favorite/deleteFavorite',
  async (_id, thunkAPI) => {
    try {
      const res = await axios.patch(`/ownrecipes/favorite/${_id}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const clearFavorite = createAsyncThunk(
  'favorite/clearFavorite',
  async (_, thunkAPI) => {
    return true;
  }
);
