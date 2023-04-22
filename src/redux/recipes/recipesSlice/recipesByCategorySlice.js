import { createSlice } from '@reduxjs/toolkit';
import getRecipesByCategory from '../operations/getRecipesByCategory'


const recipeByCategorySlice = createSlice({
    name: 'recipeByCategory',
    initialState: {
        recipeByCategory: [],
        isLoading: false,
        error: null,
        
    },
    extraReducers: builder => 
        builder
            .addCase(getRecipesByCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getRecipesByCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.recipeByCategory = action.payload;
            })
            .addCase(getRecipesByCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    

})


export const recipeByCategoryReducer = recipeByCategorySlice.reducer;