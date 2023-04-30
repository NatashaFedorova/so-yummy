import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from 'components/constants/loadingStatus/LoadingStatus';
import { addMyRecipes, clearMyRecipes, deleteMyRecipes, getMyRecipes } from './myRecipesOperation';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

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
      .addCase(addMyRecipes.pending, state => {
        handlePending(state);
      })
      .addCase(getMyRecipes.pending, state => {
        handlePending(state);
      })
      .addCase(deleteMyRecipes.pending, state => {
        handlePending(state);
      })
      .addCase(addMyRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(getMyRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(deleteMyRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          recipe => recipe.id === action.payload.id
        );

        state.items.splice(index, 1);
      })
      .addCase(addMyRecipes.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(getMyRecipes.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(deleteMyRecipes.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(clearMyRecipes.fulfilled, (state, action) => {
        state.items = [];
      })
});

export const myRecipesReducer = myRecipesSlice.reducer;