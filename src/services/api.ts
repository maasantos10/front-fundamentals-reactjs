import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://cors-anywhere.herokuapp.com/http://localhost:3333',
  baseURL: 'http://localhost:3333', //
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 30000, // request timeout
});

export default api;
