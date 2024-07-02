import React from 'react';
import Navbar from '../Navbar';
import '../../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <h1>Welcome to EL PERUANOTE</h1>
        <p>Make your reservation today!</p>
        <button className="reservation-button">Make a Reservation</button>
      </div>
    </div>
  );
}

export default Home;
