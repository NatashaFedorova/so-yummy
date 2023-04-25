import { createSlice } from '@reduxjs/toolkit';
import { changeUserData, subscribe } from './userOperation';

export const changeUserSlise = createSlice({
  name: 'users',
  initialState: {
    user: {
      name: null,
      email: null,
      avatarUrl: null,
      subscription: false,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(changeUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;

        alert('Change successful!');
      })
      .addCase(changeUserData.rejected, (state, action) => {
        alert('error');
      })
      .addCase(subscribe.fulfilled, (state, action) => {
        state.user.subscription = action.payload.subscription;

        alert('Change successful!');
      })
      .addCase(subscribe.rejected, (state, action) => {
        alert('error');
      }),
});

export const { setUser } = changeUserSlise.actions;
export const userReducer = changeUserSlise.reducer;
