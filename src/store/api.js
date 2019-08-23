import axios from 'axios';
import humps from 'humps';
import constants from '../config';

const { API_URL } = constants;

const api = axios.create({
  baseURL: API_URL,
  transformResponse: [
    ...axios.defaults.transformResponse,
    data => humps.camelizeKeys(data),
  ],
  transformRequest: [
    data => humps.decamelizeKeys(data),
    ...axios.defaults.transformRequest,
  ],
});

export default api;
