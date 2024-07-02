import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Asegúrate de importar el archivo CSS

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">EL PERUANOTE</Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-item">Inicio</Link>
          </li>
          <li>
            <Link to="/users" className="navbar-item">Usuarios</Link>
          </li>
          <li>
            <Link to="/customers" className="navbar-item">Clientes</Link>
          </li>
          <li>
            <Link to="/employees" className="navbar-item">Empleados</Link>
          </li>
          <li>
            <Link to="/tables" className="navbar-item">Mesas</Link>
          </li>
          <li>
            <Link to="/reservations" className="navbar-item">Reservaciones</Link>
          </li>
          <li>
            <Link to="/reports" className="navbar-item">Reportes</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
