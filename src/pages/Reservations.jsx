import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import '../styles/Reservations.css';

function Reservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reservations');
        setReservations(response.data);
      } catch (err) {
        console.error('Error fetching reservations', err);
      }
    };
    fetchReservations();
  }, []);

  return (
    <div>
      <Navbar />
    <div className="reservations-container">
      <h1>Reservaciones</h1>
      <table className="reservations-table">
        <thead>
          <tr>
            <th>ID del Cliente</th>
            <th>Número de Mesa</th>
            <th>Hora de Reservación</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.reservation_id}>
              <td>{reservation.customer_id}</td>
              <td>{reservation.table_id}</td>
              <td>{reservation.reservation_time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default Reservations;