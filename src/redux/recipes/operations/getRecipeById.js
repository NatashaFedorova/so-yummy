import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRecipeById = createAsyncThunk(
  'recipeById/getRecipeById',
  async (recipeId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/recipes/${recipeId}`);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const AddIngredientToShoppingList = createAsyncThunk(
  'recipeById/addToShoppingList',
  async (Items, thunkAPI) => {
    try {
      const { data, status } = await axios.post('/shoppinglist', Items);
      return { data, status };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const RemoveIngredientFromShoppingList = createAsyncThunk(
  'recipeById/removeFromShoppingList',
  async (Id, thunkAPI) => {
    try {
      const response = await axios.patch('/shoppinglist', Id);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
