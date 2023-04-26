import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperation';
import { changeUserData, subscribe } from 'redux/user/userOperation';
import { Notify } from 'notiflix';

Notify.init({
  position: "center-top",
  width: '340px',
  closeButton: false,
  timeout: 4000,
});

export const authSlise = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: true,
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;

        alert('Registration successful!');
      })
      .addCase(register.rejected, (state, action) => {
        Notify.failure('Incorrect email or password! Or maybe the user with this email address is not registered. Try again');

      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;

        Notify.success(`Welcome ${action.payload.user.name}!`);
      })
      .addCase(logIn.rejected, (state, action) => {
        Notify.failure('Incorrect email or password! Or maybe the user with this email address is not registered. Try again');
          // alert('Incorrect email or password! Or maybe the user with this email address is not registered. Try again')
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;

        Notify.info(`Goodbuy!`);
        // Notify.info(`Goodbuy ${state.user.name}!`);
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(changeUserData.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.avatarUrl = action.payload.avatarUrl;
        state.isLoggedIn = true;

        alert('Chamge successful!');
      })
      .addCase(changeUserData.rejected, (state, action) => {
        alert('error');
      })
      .addCase(subscribe.fulfilled, (state, action) => {
        state.user.subscribtion = action.payload.subscription;

        alert('Chamge successful!');
      })
      .addCase(subscribe.rejected, (state, action) => {
        alert('error');
      }),
});

export const authReducer = authSlise.reducer;