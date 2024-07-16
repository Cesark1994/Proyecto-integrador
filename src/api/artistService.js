import api from './api';

export const getArtists = async () => {
  try {
    const response = await api.get('artists/');
    return response.data;
  } catch (error) {
    console.error('Error fetching artists:', error);
    throw error;
  }
};
