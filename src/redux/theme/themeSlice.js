import { createSlice } from '@reduxjs/toolkit';

const themeInitialState = {
  status: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: themeInitialState,
  reducers: {
    changeTheme(state) {
      state.status = !state.status;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
