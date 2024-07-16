import api from './api';

export const getAlbums = async () => {
  try {
    const response = await api.get('albums/');
    return response.data;
  } catch (error) {
    console.error('Error fetching albums:', error);
    throw error;
  }
};
