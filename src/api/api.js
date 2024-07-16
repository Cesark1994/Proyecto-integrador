// src/api/api.js
import axios from 'axios';

const BASE_URL = 'http://sandbox.academiadevelopers.com/harmonyhub/';

export const api = {
  getSongs: () => axios.get(`${BASE_URL}songs/`),
  getPlaylists: () => axios.get(`${BASE_URL}playlists/`),
  getAlbums: () => axios.get(`${BASE_URL}albums/`),
  getArtists: () => axios.get(`${BASE_URL}artists/`),
  getGenres: () => axios.get(`${BASE_URL}genres/`),
  getPlaylistEntries: () => axios.get(`${BASE_URL}playlist-entries/`),
  getSongArtists: () => axios.get(`${BASE_URL}song-artists/`),
  getSongGenres: () => axios.get(`${BASE_URL}song-genres/`)
};
