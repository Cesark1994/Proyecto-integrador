// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import SongDetail from './pages/SongDetail';
import SongList from './components/SongList'; // Importa el nuevo componente
import PrivateRoute from './components/PrivateRoute';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      <Route path="/songs/:id" element={<SongDetail />} />
      <Route path="/songs" element={<SongList />} /> {/* Añade una ruta para la lista de canciones */}
    </Routes>
  </Router>
);

export default App;
