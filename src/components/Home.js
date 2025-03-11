import React from 'react';
import Navbar from './Navbar';
import './HomeStyle.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        <h1>Welcome to super hostel
        </h1>
        <p>Manage your hostel efficiently with our smart system.</p>
      </div>
    </div>
  )
}

export default Home
