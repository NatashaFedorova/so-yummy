import { createSlice } from '@reduxjs/toolkit';
import { addFavorite, deleteFavorite, getFavorite } from './favoriteOperation';
import { STATUS } from 'components/constants/loadingStatus/LoadingStatus';

const handlePending = state => {
  state.isLoading = true;
};

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

export const favoriteSlise = createSlice({
  name: 'favorite',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    status: STATUS.idle,
  },
  extraReducers: builder =>
    builder
      .addCase(addFavorite.pending, state => {
        handlePending(state);
        state.status = STATUS.loading;
      })
      .addCase(getFavorite.pending, state => {
        handlePending(state);
      })
      .addCase(deleteFavorite.pending, state => {
        handlePending(state);
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
        state.status = STATUS.success;

        console.log("action.payload", action.payload);
      })
      .addCase(getFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;

        console.log("action.payload", action.payload);
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
            recipe => recipe.id === action.payload.id
          );
        
        state.items.splice(index, 1);

      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.status = STATUS.error;
        state.error = action.payload;
    })
});

export const favoriteReducer = favoriteSlise.reducer;


// state.isLoading = false;
//         state.error = null;
//         const index = state.items.findIndex(
//           task => task.id === action.payload.id
//         );
//         state.items.splice(index, 1);