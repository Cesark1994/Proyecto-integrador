import api from './api';

export const getPlaylists = async () => {
  try {
    const response = await api.get('playlists/');
    return response.data;
  } catch (error) {
    console.error('Error fetching playlists:', error);
    throw error;
  }
};
