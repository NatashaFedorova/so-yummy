import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const addRecipe = createAsyncThunk(
  'ownrecipes/addRecipe',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('ownrecipes', credentials, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      Notify.success('New recipe was successfully added');
      return response.data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export default addRecipe;
