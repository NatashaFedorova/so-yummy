import axios from 'axios';


const getRecipesByIngredient = async (query, page, limit) => {
  try {
    const response = await axios(
      `https://t2d-soyammy-backend.onrender.com/api/ingredients?query=${query}&page=${page}&limit=${limit}`
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getRecipesByIngredient;
