import api from './api';
import {saveToken} from '@/utils/authStorage';

export const signup = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  try {
    const res = await api.post('/auth/signup', data);
    const {token, user} = res.data;
    await saveToken(token);
    return {token, user};
  } catch (err: any) {
    throw err.response?.data?.message || 'Signup failed';
  }
};

export const login = async (data: {email: string; password: string}) => {
  try {
    const {email, password} = data;
    const res = await api.post('/auth/login', {email, password});

    const {token, user} = res.data;
    await saveToken(token);
    return {token, user};
  } catch (err: any) {
    throw err.response?.data?.message;
  }
};
