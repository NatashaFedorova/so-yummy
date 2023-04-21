import { createSlice } from '@reduxjs/toolkit';

import { STATUS } from "../../../components/constants/loadingStatus/LoadingStatus";
import { getRecipeById } from '../operations/getRecipeById';
import { addToFavorite } from '../operations/getRecipeById';


const handlePending = state => {
    state.recipeById.status = STATUS.loading;
};

const handleRejected = (state, action) => {
    state.recipeById.isLoading = false;
    state.recipeById.status = STATUS.error;
    state.recipeById.error = action.payload;
};

const initState = {
    recipeById: {
        status: STATUS.idle,
        items: [],
        isLoading: 'init',
        error: null,
    },
};

const recipeByIdSlice = createSlice({
    name: 'recipeById',
    initialState: initState,
    reducers: {},
    extraReducers: {
        [getRecipeById.pending]: handlePending,
        [getRecipeById.rejected]: handleRejected,
        [getRecipeById.fulfilled](state, action) {
            state.recipeById.items = action.payload;
            state.recipeById.status = STATUS.success;
        },


        [addToFavorite.pending]: (state) => {
            state.recipeById.status = STATUS.loading
        },
        [addToFavorite.rejected]: (state) => {
            state.recipeById.status = STATUS.error;
        },
        [addToFavorite.fulfilled](state, action) {
            state.recipeById.status = STATUS.success;
        },



    },




});

const recipesByIdReducer = recipeByIdSlice.reducer;
export default recipesByIdReducer;
