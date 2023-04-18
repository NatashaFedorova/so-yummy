import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import clearAuthHeader from './clearAuthHeader';

const logOut = createAsyncThunk('', async (credentials, thunkAPI) => {
  try {
  } catch ({ message }) {
    return thunkAPI.rejectWithValue(message);
  }
});

export default logOut;
