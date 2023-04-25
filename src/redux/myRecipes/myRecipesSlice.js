import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from 'components/constants/loadingStatus/LoadingStatus';
import {
  addFavorite,
  deleteFavorite,
  getFavorite,
} from 'redux/favorite/favoriteOperation';

export const myRecipesSlice = createSlice({
  name: 'myrecipes',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    status: STATUS.idle,
  },
  extraReducers: builder =>
    builder
      .addCase(addFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(getFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addFavorite.rejected, (state, action) => {}),
});

export const favoriteReducer = myRecipesSlice.reducer;
