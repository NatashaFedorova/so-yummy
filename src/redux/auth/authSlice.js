import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {},
    [register.rejected](state, action) {},
  },
});

export const authReducer = authSlice.reducer;
