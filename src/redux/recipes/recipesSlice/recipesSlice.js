import { createSlice } from '@reduxjs/toolkit';
import { getRecipes } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: {
    [getRecipes.pending]: handlePending,
    [getRecipes.rejected]: handleRejected,
    [getRecipes.fulfilled](state, action) {},
  },
});

const recipesReducer = recipesSlice.reducer;
export default recipesReducer;
