import axios, { AxiosInstance } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  // prodaction
  // baseURL: 'https://evening-hamlet-95523.herokuapp.com',
  headers: {},
});
