import { createSlice } from '@reduxjs/toolkit';

import { STATUS } from "../../../components/constants/loadingStatus/LoadingStatus";
import { addRecipeTofavorite } from '../operations/getRecipeById';
//import { addIngredientToShopList } from '../operations/getRecipeById';


const recipeToFavoriteSlice = createSlice({
    name: 'addRcpToFavorite',
    initialState: {
        status: STATUS.idle,
        items: [],
        isLoading: 'init',
        error: null,
    },
    extraReducers: builder =>
        builder
            .addCase(addRecipeTofavorite.pending, (state) => {
                state.status = STATUS.loading;
            })
            .addCase(addRecipeTofavorite.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = STATUS.success;
            })
            .addCase(addRecipeTofavorite.rejected, (state, action) => {
                state.status = STATUS.error;
                state.error = action.payload;
            })

})

export const recipeToFavoriteReducer = recipeToFavoriteSlice.reducer;