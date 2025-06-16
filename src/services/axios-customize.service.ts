import axios, { type AxiosResponse, type InternalAxiosRequestConfig } from "axios";
import { refreshToken } from "./user.service";

axios.defaults.baseURL = import.meta.env['VITE_BACKEND_URL'];
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config: InternalAxiosRequestConfig) {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken && config.headers)
    config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response: AxiosResponse) {
  if (response?.data) return response.data
  return response;
}, async function (error) {
  if (error?.response?.data?.message == 'access token expired' && !error.config._retry) {
    const originalRequest = error.config;
    error.config._retry = true;
    try {
      const res = await refreshToken();
      if(res && res.accessToken){
        const { accessToken } = res;
        console.log('Access token refreshed successfully');
  
        localStorage.setItem('accessToken', accessToken);
        
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        }
        return axios(originalRequest);
      }
      else{
        console.error('Failed to refresh access token');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        window.location.href = '/login';
        return Promise.reject(new Error('Failed to refresh access token'));
      }
    } catch (error) {
      console.error('Refresh token failed:', error);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      window.location.href = '/login';
      return Promise.reject(error);
    }
  }

  else if (error?.response?.data) return {
    error: error?.response?.data
  };
  return Promise.reject(error);
});

export default axios;