// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import setAuthHeader from './setAuthHeader';

const signIn = createAsyncThunk('', async (credentials, thunkAPI) => {
  try {
  } catch ({ message }) {
    return thunkAPI.rejectWithValue(message);
  }
});

export default signIn;
