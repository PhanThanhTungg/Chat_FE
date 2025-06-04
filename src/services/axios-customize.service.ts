import axios from "axios";

axios.defaults.baseURL = import.meta.env['VITE_BACKEND_URL'];

axios.interceptors.request.use(function (config) {
  return config;  
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  if(response?.data) return response.data
  return response;
}, function (error) {
  if (error?.response?.data) return{
    error: error?.response?.data
  };
  return Promise.reject(error);
});

export default axios;