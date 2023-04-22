import { createSlice } from '@reduxjs/toolkit';
import { changeUserData } from './userOperation';

export const changeUserSlise = createSlice({
  name: 'users',
  initialState: {
    user: { name: null, email: null, avatarUrl: null },
  },
  extraReducers: builder =>
    builder
      .addCase(changeUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;

        console.log('Change successful!', action.payload);
        alert('Chamge successful!');
      })
      .addCase(changeUserData.rejected, (state, action) => {
        alert('error');
      }),
});

export const userReducer = changeUserSlise.reducer;
