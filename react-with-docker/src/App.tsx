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
import ThankYou from './pages/ThankYou';
import EventFormNew from './pages/EventFormNew';
import EventDataCard from './pages/EventDataCard';
import EventFinal from './pages/EventFinal';
import ThankYouPage from './pages/ThankYouFinal';
import SpaceManager from './components/SpaceManager';
import SideBarMainNew from './components/SideBarMainNew';
import InqueryManager from './components/InqueryManager';
import WorkFlowManagerNew from './components/WorkFlowManagerNew';

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
          < SideBarMainNew />
          <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
            <Toolbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<SpaceManager/>} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/events" element={<EventFinal/>} />
              <Route path="/thank-you" element={<ThankYouPage />} />
              <Route path="/sm" element={<SpaceManager />} />
              <Route path="/wf" element={<WorkFlowManagerNew/>} />
              <Route path="/iq" element={<InqueryManager/>} />



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
