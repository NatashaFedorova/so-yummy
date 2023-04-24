import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://t2d-soyammy-backend.onrender.com/api/';

export const changeUserData = createAsyncThunk(
  'changeUserData',
  async (credentials, thunkAPI) => {
    try {
      const headers = {
        'contetnt-type': 'multipart/form-data',
      };

      const res = await axios.patch(
        '/users/changeUserData',
        credentials,
        headers
      );
      console.log(res);
      return res.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const subscribe = createAsyncThunk('/', async (_, thunkAPI) => {
  try {
    const res = await axios.post('/subscribe');
    return res.data;
  } catch ({ message }) {
    return thunkAPI.rejectWithValue(message);
  }
});
