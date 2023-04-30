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
      .addCase(getRecipeById.pending, state => {
        //state.status = STATUS.loading;
      })
      .addCase(getRecipeById.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = STATUS.success;
      })
      .addCase(getRecipeById.rejected, (state, action) => {
        //state.status = STATUS.error;
        state.error = action.payload;
      })

      ///// ADD TO SHOPPING LIST

      .addCase(AddIngredientToShoppingList.pending, state => {
        // state.status = STATUS.loading;
      })
      .addCase(AddIngredientToShoppingList.fulfilled, (state, action) => {
        state.shopList = action.payload;
        // state.status = STATUS.success;
      })
      .addCase(AddIngredientToShoppingList.rejected, (state, action) => {
        // state.status = STATUS.error;
        state.error = action.payload;
      })

      //// REMOVE FROM SHOPPINGLIST

      .addCase(RemoveIngredientFromShoppingList.pending, state => {
        //state.status = STATUS.loading;
      })
      .addCase(RemoveIngredientFromShoppingList.fulfilled, (state, action) => {
        // const index = state.items.findIndex(
        //     ingredient => ingredient._id === action.payload.id
        // );
        //state.status = STATUS.success;
      })
      .addCase(RemoveIngredientFromShoppingList.rejected, (state, action) => {
        // state.status = STATUS.error;
        state.error = action.payload;
      }),
});

export const recipesByIdReducer = recipeByIdSlice.reducer;
