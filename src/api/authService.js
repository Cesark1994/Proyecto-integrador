// src/api/authService.js
import { api } from './api';

export const login = async (email, password) => {
  const response = await api.post('/auth/login/', { email, password });
  return response.data;
};

export const register = async (email, password) => {
  const response = await api.post('/auth/register/', { email, password });
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get('/auth/user/');
  return response.data;
};
