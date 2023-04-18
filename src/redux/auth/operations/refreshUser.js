import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const refreshUser = createAsyncThunk(
  '',
  async (credentials, thunkAPI) => {
    try {
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export default refreshUser;
