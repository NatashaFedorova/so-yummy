import axios from 'axios';

const getRecepiesByTitle = async (query, page) => {
  try {
    const response = await axios(
      `https://t2d-soyammy-backend.onrender.com/api/recipes/search?title=${query}&page=${page}&limit=8`
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getRecepiesByTitle;
