// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box, Toolbar } from '@mui/material';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'auto' }}>
        <CssBaseline />
        <Box sx={{ flexShrink: 0 }}>
          <Header />
        </Box>
        <Box sx={{ display: 'flex', flex: 1, overflowY: 'auto' }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
            <Toolbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Box>
      </Box>
      <Box sx={{ flexShrink: 0 }}>
        <Footer />
      </Box >
    </Router>
  );
};

export default App;
