// src/api/songService.js
import { api } from './api';

export const getSongs = async () => {
  try {
    const response = await api.get('songs/');
    return response.data;
  } catch (error) {
    console.error('Error fetching songs:', error);
    throw error;
  }
};

export const getSongById = async (id) => {
  try {
    const response = await api.get(`songs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching song by id:', error);
    throw error;
  }
};
