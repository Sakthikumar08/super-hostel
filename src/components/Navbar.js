
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavbarStyle.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 className="logo">Smart building management system</h2>
       {/*  <nav>
        <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
        <NavLink to="/complaint-box" className="nav-link" activeClassName="active">Complaint Box</NavLink>
        <NavLink to="/complaint-report" className="nav-link" activeClassName="active">Complaint Report</NavLink>
        <NavLink to="/analytics" className="nav-link" activeClassName="active">Analytics</NavLink>
      </nav>  */} 
    </div>
  );
};

export default Navbar;