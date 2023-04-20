import { createSlice } from '@reduxjs/toolkit';
// import { register, logIn, logOut } from './authOperation';
import { register, logIn, logOut, refreshUser } from './authOperation';
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
        state.user = action.payload;
        // state.token = action.payload.token;
        state.isLoggedIn = true;

        console.log('Registration successful!', action.payload);
        alert('Registration successful!');
      })
      .addCase(logIn.fulfilled, (state, action) => {
        // state.user = action.payload;
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
      .addCase(logIn.rejected, (state, action) => {
        // Notify.failure('ooops');
          alert('Incorrect email or password! Or maybe the user with this email address is not registered. Try again')
      })
      .addCase(register.rejected, (state, action) => {
        alert('Ooops, it fail :)')
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
     
});

export const authReducer = authSlise.reducer;