import { createSlice } from '@reduxjs/toolkit';

import getIngredientsList from '../operations/getIngredientsList';
import popularRecipes from '../operations/popularRecipes';
import getCategories from '../operations/getAddReceiptCategories';

const addRecipeSlice = createSlice({
  name: 'addRecipe',
  initialState: {
    receipts: [],
    ingredients: [],
    categories: [],
    isLoading: false,
    receiptsError: null,
    ingredientsError: null,
    categoriesError: null,
    addRecipeError: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getIngredientsList.pending, state => {
        state.isLoading = true;
      })
      .addCase(getIngredientsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredients = action.payload;
        state.ingredientsError = null;
      })
      .addCase(getIngredientsList.rejected, (state, action) => {
        state.isLoading = false;
        state.ingredientsError = action.payload;
      })
      .addCase(popularRecipes.pending, state => {
        state.isLoading = true;
      })
      .addCase(popularRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.receipts = action.payload;
        state.receiptsError = null;
      })
      .addCase(popularRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.receiptsError = action.payload;
      })
      .addCase(getCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
        state.categoriesError = null;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.categoriesError = action.payload;
      }),
});

export const addRecipeReducer = addRecipeSlice.reducer;
