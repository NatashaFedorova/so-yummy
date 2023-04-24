import { createSlice } from '@reduxjs/toolkit';
import { subscribe } from './subscribeOperations';

export const subscribeSlise = createSlice({
  name: '/subcribe',
  initialState: {
    subscribe: false,
  },
  extraReducers: builder =>
    builder
      .addCase(subscribe.fulfilled, (state, action) => {
        state.subscribe = action.payload;

        console.log('Change successful!', action.payload);
        alert('Chamge successful!');
      })
      .addCase(subscribe.rejected, (state, action) => {
        alert('error');
      }),
});

export const subscribeReducer = subscribeSlise.reducer;
