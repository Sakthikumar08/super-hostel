import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavbarStyle.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h2 className="logo">Smart Management System</h2>
      <nav>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/complaint-box')}>Complaint Box</button>
        <button onClick={() => navigate('/complaint-report')}>Complaint Report</button>
        <button onClick={() => navigate('/analytics')}>Analytics</button>
      </nav>
    </div>
  );
};

export default Navbar;
