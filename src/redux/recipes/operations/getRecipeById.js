
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getRecipeById = createAsyncThunk('recipeById/getRecipeById', async (recipeId, thunkAPI) => {
  try {
    const { data } = await axios.get(`/recipes/${recipeId}`);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }

})
// export default getRecipeById;

// export const addIngredientToShopList = createAsyncThunk(
//   "recipeById/addToShopList",
//   async (ArrIngredient, thunkAPI) => {
//     try {
//       const response = await axios.post("/shoppinglist", ArrIngredient);
//       return response.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );

export const addRecipeTofavorite = createAsyncThunk(
  "recipeById/addRcpToFavorite",
  async (IdRecept, thunkAPI) => {
    try {
      const response = await axios.put("/ownrecipes/favorite", IdRecept);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);