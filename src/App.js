import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './views/landing/LandingPage';
import Contacto from './views/contacto/contacto';
import Tocadas from './views/tocadas/tocadas';
import Nosotros from './views/nosotros/nosotros';
import { Navbar } from './views/components/navbar';
import { AnimatePresence } from 'framer-motion';

const Animated = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes
        location={location}
        key={location.pathname}
      >
        <Route path="/" element={<LandingPage />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/tocadas" element={<Tocadas />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Animated />
    </Router>
  );
}

export default App;
