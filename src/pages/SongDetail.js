import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSongById } from '../api/songService';

const SongDetail = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);

  useEffect(() => {
    const fetchSong = async () => {
      const data = await getSongById(id);
      setSong(data);
    };

    fetchSong();
  }, [id]);

  if (!song) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{song.title}</h1>
      <p>{song.artist}</p>
      {/* Add more song details here */}
    </div>
  );
};

export default SongDetail;
