// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box, Toolbar } from '@mui/material';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import SidebarNew from './components/SidebarNew';
import TopNavBar from './components/TopNabar';
import SidebarMain from './components/SidebarMain';
import TopNavbarNew from './components/TopNavbarNew';
import TopNavBarFinal from './components/TopNavBarFinal';
import Events from './pages/Events';
import ThankYou from './pages/ThankYou';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'auto' }}>
        <CssBaseline />
        <Box sx={{ flexShrink: 0 }}>
          <TopNavBarFinal  />
        </Box>
        <Box sx={{ display: 'flex', flex: 1, overflowY: 'auto' }}>
          < SidebarMain />
          <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
            <Toolbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/events" element={<Events/>} />
              <Route path="/thank-you" element={<ThankYou />} />


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
