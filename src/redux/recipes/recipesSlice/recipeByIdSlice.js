import { createSlice } from '@reduxjs/toolkit';

import { STATUS } from "../../../components/constants/loadingStatus/LoadingStatus";
import { getRecipeById } from '../operations/getRecipeById';
import { AddIngredientToShoppingList } from '../operations/getRecipeById';
//import { addIngredientToShopList } from '../operations/getRecipeById';
//import { addToFavorite } from '../operations/getRecipeById';

const recipeByIdSlice = createSlice({
    name: 'recipeById',
    initialState: {
        status: STATUS.idle,
        items: [],
        shopList: [],
        isLoading: 'init',
        error: null,
    },
    extraReducers: builder =>
        builder
            .addCase(getRecipeById.pending, (state) => {
                state.status = STATUS.loading;
            })
            .addCase(getRecipeById.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = STATUS.success;
            })
            .addCase(getRecipeById.rejected, (state, action) => {
                state.status = STATUS.error;
                state.error = action.payload;
            })

            /////
            .addCase(AddIngredientToShoppingList.pending, (state) => {
                state.status = STATUS.loading;
            })
            .addCase(AddIngredientToShoppingList.fulfilled, (state, action) => {
                state.shopList = action.payload;
                state.status = STATUS.success;
            })
            .addCase(AddIngredientToShoppingList.rejected, (state, action) => {
                state.status = STATUS.error;
                state.error = action.payload;
            })

})

export const recipesByIdReducer = recipeByIdSlice.reducer;





















// const recipeByIdSlice = createSlice({
//     name: 'recipeById',
//     initialState: initState,
//     reducers: {},
//     extraReducers: {
//         [getRecipeById.pending]: handlePending,
//         [getRecipeById.rejected]: handleRejected,
//         [getRecipeById.fulfilled](state, action) {
//             state.recipeById.items = action.payload;
//             state.recipeById.status = STATUS.success;
//         },


//         [addToFavorite.pending]: (state) => {
//             state.recipeById.status = STATUS.loading
//         },
//         [addToFavorite.rejected]: (state) => {
//             state.recipeById.status = STATUS.error;
//         },
//         [addToFavorite.fulfilled](state, action) {
//             state.recipeById.status = STATUS.success;
//         },

//     },

// });

// const recipesByIdReducer = recipeByIdSlice.reducer;
// export default recipesByIdReducer;