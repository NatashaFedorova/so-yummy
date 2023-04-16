import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https:/xxxxxxxxxxxxxxxxxxxxx.com/';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('', async (credentials, thunkAPI) => {
  try {
  } catch ({ message }) {
    return thunkAPI.rejectWithValue(message);
  }
});

export const signIn = createAsyncThunk('', async (credentials, thunkAPI) => {
  try {
  } catch ({ message }) {
    return thunkAPI.rejectWithValue(message);
  }
});

export const logOut = createAsyncThunk('', async (credentials, thunkAPI) => {
  try {
  } catch ({ message }) {
    return thunkAPI.rejectWithValue(message);
  }
});

export const subscription = createAsyncThunk(
  '',
  async (credentials, thunkAPI) => {
    try {
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  '',
  async (credentials, thunkAPI) => {
    try {
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
