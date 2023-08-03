import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      handleTokenExpiration();
    }
    return Promise.reject(error);
  }
);

const handleTokenExpiration = () => {
  localStorage.removeItem('isUser');
  window.location.href = '/login'; 
};

export default axiosInstance;
