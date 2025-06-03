import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layouts/Layout';
import PokemonDetail from './pages/PokemonDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;