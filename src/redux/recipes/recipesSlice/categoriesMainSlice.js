import { createSlice } from '@reduxjs/toolkit';
import getRecipesByCategoryForMainPage from '../operations/getRecipesByCategoryForMainPage';

import { STATUS } from '../../../components/constants/loadingStatus/LoadingStatus';

const handlePending = state => {
  state.mainCategories.status = STATUS.loading;
};

const handleRejected = (state, action) => {
  state.mainCategories.status = STATUS.error;
  state.mainCategories.error = action.payload;
};

const initialState = {
  mainCategories: {
    status: STATUS.idle,
    categoryList: [],
    categoriesForMain: null,
    error: null,
  },
};

const mainCategoriesSlice = createSlice({
  name: 'mainCategories',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(
        getRecipesByCategoryForMainPage.fulfilled,
        (state, { payload }) => {
          state.mainCategories.status = STATUS.fulfilled;
          state.mainCategories.categoriesForMain = payload;
        }
      )
      .addCase(getRecipesByCategoryForMainPage.pending, handlePending)

      .addCase(getRecipesByCategoryForMainPage.rejected, handleRejected),
});

const mainCategoriesSliceReducer = mainCategoriesSlice.reducer;

export default mainCategoriesSliceReducer;
