import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
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