import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperation';
import { changeUserData, subscribe } from 'redux/user/userOperation';
// import { Notify } from 'notiflix';

// Notify.init({
//   width: '720px',
//   closeButton: false,
//   timeout: 5000,
// });

export const authSlise = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token;
        state.isLoggedIn = true;

        alert('Registration successful!');
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;

        alert('Welcome USER!')
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;

        alert('Goodbuy USER!')
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        // Notify.failure('ooops');
          alert('Incorrect email or password! Or maybe the user with this email address is not registered. Try again')
      })
      .addCase(register.rejected, (state, action) => {
        alert('Ooops, it fail :)')
      })
      .addCase(changeUserData.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.avatarUrl = action.payload.avatarUrl;
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

export const authReducer = authSlise.reducer;