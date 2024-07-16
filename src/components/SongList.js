// src/components/SongList.js
import React, { useEffect, useState } from 'react';
import { api } from '../api/api'; // Importa el objeto api

const SongList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await api.getSongs(); // Usa api.getSongs()
        setSongs(response.data); // Actualiza el estado con los datos de respuesta
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div>
      <h1>Song List</h1>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
