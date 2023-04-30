import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, toggleIsRefreshing, refreshUserLite } from './authOperation';
import { changeUserData, subscribe } from 'redux/user/userOperation';
import Notiflix, { Notify } from 'notiflix';

Notiflix.Notify.init({
  position: "center-top",
  background: "#8AA936",
  width: "340px",
  closeButton: false,
  timeout: 4000,
});

Notiflix.Notify.merge({
  background: "#8AA936",
  position: "center-bottom",
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
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;

        Notify.success(
          `Registration successful! Welcome ${action.payload.user.name}!`
        );
      })
      .addCase(register.rejected, _ => {
        Notify.failure(
          'Incorrect email or password! Or maybe the user with this email address is not registered. Try again'
        );
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;

        Notify.success(`Welcome ${action.payload.user.name}!`);
      })
      .addCase(logIn.rejected, _ => {
        Notify.failure(
          'Incorrect email or password! Or maybe the user with this email address is not registered. Try again'
        );
      })
      .addCase(logOut.fulfilled, state => {
        Notify.success(`Goodbye ${state.user.name}!`);
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(changeUserData.fulfilled, (state, action) => {
        if (action.payload.name !== '[object HTMLInputElement]') {
          state.user.name = action.payload.name;
        }
        state.user.avatarUrl = action.payload.avatarUrl;
        state.isLoggedIn = true;
        Notify.success('Changes successful');
      })
      .addCase(changeUserData.rejected, _ => {
        Notify.failure('Error');
      })
      .addCase(subscribe.fulfilled, (state, action) => {
        state.user.subscribtion = action.payload.subscription;
        Notify.success('Changes successful');
      })
      .addCase(subscribe.rejected, _ => {
        Notify.failure('Error');
      })
      .addCase(toggleIsRefreshing.fulfilled, (state, action) => {
        state.isRefreshing = action.payload;
      }) 
      .addCase(refreshUserLite.pending, state => {
        // state.isRefreshing = true;
      })
      .addCase(refreshUserLite.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        // state.isRefreshing = false;
      })
      .addCase(refreshUserLite.rejected, state => {
        state.isLoggedIn = false;
        // state.isRefreshing = false;
      })
});

export const authReducer = authSlise.reducer;
