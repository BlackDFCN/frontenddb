import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <h1>Bienvenido a EL PERUANOTE</h1>
        <p>Descubre la auténtica esencia de la cocina peruana en cada bocado.</p>
        <p>En el Peruanote, te invitamos a embarcarte en un viaje culinario</p>
        <p>que celebra la riqueza y diversidad de los sabores de Perú.</p>
        <button className="reservation-button">Reserva tu Mesa</button>
      </div>
    </div>
  );
}

export default Home;
