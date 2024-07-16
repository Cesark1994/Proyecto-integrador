import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSongs } from '../api/songService';

const SongDetail = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const data = await getSongs();
        const selectedSong = data.find(song => song.id === parseInt(id));
        setSong(selectedSong);
      } catch (error) {
        console.error('Error fetching song:', error);
      }
    };

    fetchSong();
  }, [id]);

  if (!song) return <p>Loading...</p>;

  return (
    <div>
      <h2>{song.title}</h2>
      <p>Artist: {song.artist}</p>
      <p>Album: {song.album}</p>
    </div>
  );
}

export default SongDetail;
