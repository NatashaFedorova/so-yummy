// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const addRecipe = createAsyncThunk(
  'ownrecipes/addRecipe',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('ownrecipes', credentials);
      console.log(response);
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export default addRecipe;
