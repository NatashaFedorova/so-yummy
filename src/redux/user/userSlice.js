import { createSlice } from '@reduxjs/toolkit';
import { changeUserData, subscribe } from './userOperation';

export const changeUserSlise = createSlice({
  name: 'users',
  initialState: {
    user: {
      name: null,
      email: null,
      avatarUrl: null,
      subscribtion: false,
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

        console.log('Change successful!', action.payload);
        alert('Chamge successful!');
      })
      .addCase(changeUserData.rejected, (state, action) => {
        alert('error');
      })
      .addCase(subscribe.fulfilled, (state, action) => {
        state.user.subscribtion = action.payload;

        console.log('Change successful!', action.payload);
        alert('Chamge successful!');
      })
      .addCase(subscribe.rejected, (state, action) => {
        alert('error');
      }),
});

export const { setUser } = changeUserSlise.actions;
export const userReducer = changeUserSlise.reducer;
