import { createSlice } from '@reduxjs/toolkit';

import { getRecipeById } from '../operations/getRecipeById';

const handlePending = state => {
    state.recipeById.isLoading = 'pending';
};

const handleRejected = (state, action) => {
    state.recipeById.isLoading = false;
    state.recipeById.error = action.payload;
};

const initState = {
    recipeById: {
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
            state.recipeById.isLoading = 'load';
        },
    },
});

const recipesByIdReducer = recipeByIdSlice.reducer;
export default recipesByIdReducer;
