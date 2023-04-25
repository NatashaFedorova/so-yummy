import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
// axios.defaults.baseURL = 'https://t2d-soyammy-backend.onrender.com/api/';
// console.log(axios.defaults.baseURL);

const getCategories = createAsyncThunk('categories/getCat', async (_, thunkAPI) => {
    try {
        const res = await axios.get('recipes/category-list');
        return res.data
    }
    catch (e) {
        console.log("error");
        return thunkAPI.fulfillWithValue(e.message);
    }
});

export default getCategories;