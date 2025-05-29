import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './views/landing/LandingPage';
import Contacto from './views/contacto/contacto';
import Tocadas from './views/tocadas/tocadas';
import Nosotros from './views/nosotros/nosotros';
import { Navbar } from './views/components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/tocadas" element={<Tocadas />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </Router>
  );
}

export default App;
