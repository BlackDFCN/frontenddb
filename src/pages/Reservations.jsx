import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Reservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reservations/list');
        setReservations(response.data);
      } catch (err) {
        console.error('Error fetching reservations', err);
      }
    };
    fetchReservations();
  }, []);

  return (
    <div>
      <h1>Reservations</h1>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.reservation_id}>
            {reservation.customer_id} - {reservation.table_id} - {reservation.reservation_time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reservations;
