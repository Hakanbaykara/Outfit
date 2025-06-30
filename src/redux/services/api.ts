import axios from 'axios';
import {getToken} from '@/utils/authStorage';
import {STAGING_API_URL} from '@env';

const api = axios.create({
  baseURL: STAGING_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async config => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
