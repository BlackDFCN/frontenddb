import React, { useState, useEffect } from 'react';
import reservationService from '../services/reservationService';
import '../styles/AdminReservations.css';

const AdminReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    async function fetchReservations() {
      try {
        const data = await reservationService.getAllReservations();
        setReservations(data);
      } catch (err) {
        console.error('Error fetching reservations', err);
      }
    }
    fetchReservations();
  }, []);

  const handleCancel = async (id) => {
    try {
      await reservationService.cancelReservation(id);
      setReservations(reservations.filter(res => res.reservation_id !== id));
    } catch (err) {
      console.error('Error canceling reservation', err);
    }
  };

  const handleAssignTable = async (reservationId, tableId) => {
    try {
      await reservationService.assignTable(reservationId, tableId);
      const updatedReservations = await reservationService.getAllReservations();
      setReservations(updatedReservations);
    } catch (err) {
      console.error('Error assigning table', err);
    }
  };

  return (
    <div className="admin-reservations">
      <h2>Manage Reservations</h2>
      <ul>
        {reservations.map(reservation => (
          <li key={reservation.reservation_id} className="reservation-item">
            <p>Customer: {reservation.customer_id}</p>
            <p>Table: {reservation.table_id}</p>
            <p>Time: {reservation.reservation_time}</p>
            <p>Status: {reservation.status}</p>
            <button onClick={() => handleCancel(reservation.reservation_id)} className="cancel-btn">Cancel</button>
            <button onClick={() => handleAssignTable(reservation.reservation_id, reservation.table_id)} className="assign-btn">Assign Table</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminReservations;
