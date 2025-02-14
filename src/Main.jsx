import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import TicketSelection from './TicketSelection.jsx';
import AttendeeDetails from './AttendeeDetails.jsx';
import TicketGeneration from './TicketGeneration.jsx';
import React from 'react';
import './App.css'; 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/select-ticket' element={<TicketSelection />} />
        <Route path='/attendee-details' element={<AttendeeDetails />} />
        <Route path='/ticket-generator' element={<TicketGeneration />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);