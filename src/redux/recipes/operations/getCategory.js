import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
// axios.defaults.baseURL = 'https://t2d-soyammy-backend.onrender.com/api/';
// console.log(axios.defaults.baseURL);

const getCategories = createAsyncThunk('categories/getCat', async (_, thunkAPI) => {
    console.log(4555);
    try {
        const res = await axios.get('recipes/category-list');
        console.log(res.data, "category");
        // setAuthHeader(data.token);
        return res.data
    }
    catch (e) {
        console.log("error");
        return thunkAPI.fulfillWithValue(e.message, 1222);
    }
    finally {
        console.log("get");
    }
});

export default getCategories;