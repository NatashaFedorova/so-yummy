import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getIngredientsList = createAsyncThunk(
  'ingredients/getIngredientsList',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`ingredients/list`);
      const data = res.data.map(item => ({
        _id: item._id,
        value: item.ttl,
        label: item.ttl,
      }));

      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export default getIngredientsList;
