import { createSlice } from '@reduxjs/toolkit';
import getCategories from '../operations/getCategory'


const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        isLoading: false,
        error: null,
        
    },
    extraReducers: builder => 
        builder
            .addCase(getCategories.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.categories = action.payload;
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    

})


export const categoryReducer = categorySlice.reducer;