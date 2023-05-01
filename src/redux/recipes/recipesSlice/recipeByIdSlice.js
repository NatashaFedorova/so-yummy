import { createSlice } from '@reduxjs/toolkit';

import { STATUS } from '../../../components/constants/loadingStatus/LoadingStatus';
import { getRecipeById } from '../operations/getRecipeById';
import {
  AddIngredientToShoppingList,
  RemoveIngredientFromShoppingList,
} from '../operations/getRecipeById';

const recipeByIdSlice = createSlice({
  name: 'recipeById',
  initialState: {
    status: STATUS.idle,
    items: [],
    shopList: [],
    addStausCode: '',
  },
  extraReducers: builder =>
    builder
      .addCase(getRecipeById.pending, state => {})
      .addCase(getRecipeById.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = STATUS.success;
      })
      .addCase(getRecipeById.rejected, (state, action) => {
        state.error = action.payload;
      })

      ///// ADD TO SHOPPING LIST

      .addCase(AddIngredientToShoppingList.pending, state => {})
      .addCase(AddIngredientToShoppingList.fulfilled, (state, action) => {
        state.shopList = action.payload;
      })
      .addCase(AddIngredientToShoppingList.rejected, (state, action) => {
        state.error = action.payload;
      })

      //// REMOVE FROM SHOPPINGLIST

      .addCase(RemoveIngredientFromShoppingList.pending, state => {})
      .addCase(
        RemoveIngredientFromShoppingList.fulfilled,
        (state, action) => {}
      )
      .addCase(RemoveIngredientFromShoppingList.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const recipesByIdReducer = recipeByIdSlice.reducer;
