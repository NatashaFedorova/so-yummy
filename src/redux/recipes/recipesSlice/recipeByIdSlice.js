import { createSlice } from '@reduxjs/toolkit';

import { getRecipeById } from '../operations/getRecipeById';
const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const initState = {
    items: [],
    isLoading: false,
    error: null,
};

const recipeByIdSlice = createSlice({
    name: 'recipeById',
    initialState: initState,
    reducers: {},
    extraReducers: {
        [getRecipeById.pending]: handlePending,
        [getRecipeById.rejected]: handleRejected,
        [getRecipeById.fulfilled](state, action) {
            state.items = action.payload;
            state.isLoading = true;
        },
    },
});

const recipesByIdReducer = recipeByIdSlice.reducer;
export default recipesByIdReducer;
