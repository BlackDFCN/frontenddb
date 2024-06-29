import React, { useState, useEffect } from 'react';
import reservationService from '../services/reservationService';

const UserReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    async function fetchReservations() {
      try {
        const data = await reservationService.getReservations();
        setReservations(data);
      } catch (err) {
        console.error('Error fetching reservations', err);
      }
    }
    fetchReservations();
  }, []);

  return (
    <div>
      <h2>Your Reservations</h2>
      <ul>
        {reservations.map(reservation => (
          <li key={reservation.reservation_id}>
            Table Number: {reservation.table_id}, Time: {reservation.reservation_time}, Status: {reservation.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserReservations;
