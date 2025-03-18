import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Complaintbox from './components/Complaintbox';
import Complaintreport from './components/Complaintreport';
import Analytics from './components/Analytics';
import Complaintform from './components/Complaintform';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/complaint-box" element={<Complaintbox />} />
            <Route path="/complaint-report" element={<Complaintreport />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/complaintform" element={<Complaintform />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
