import axios from 'axios';

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export default clearAuthHeader;
