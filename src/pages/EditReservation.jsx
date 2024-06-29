import React, { useState, useEffect } from 'react';
import reservationService from '../services/reservationService';

const EditReservation = ({ match }) => {
  const [reservation, setReservation] = useState(null);
  const [customerId, setCustomerId] = useState('');
  const [tableId, setTableId] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    async function fetchReservation() {
      try {
        const data = await reservationService.getReservation(match.params.id);
        setReservation(data);
        setCustomerId(data.customer_id);
        setTableId(data.table_id);
        setReservationTime(data.reservation_time);
        setStatus(data.status);
      } catch (err) {
        console.error('Error fetching reservation', err);
      }
    }
    fetchReservation();
  }, [match.params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await reservationService.updateReservation(match.params.id, { customer_id: customerId, table_id: tableId, reservation_time: reservationTime, status });
      alert('Reservation updated successfully');
    } catch (err) {
      console.error('Error updating reservation', err);
      alert('Failed to update reservation');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Reservation</h2>
      {reservation && (
        <>
          <label>
            Customer ID:
            <input type="number" value={customerId} onChange={(e) => setCustomerId(e.target.value)} required />
          </label>
          <label>
            Table ID:
            <input type="number" value={tableId} onChange={(e) => setTableId(e.target.value)} required />
          </label>
          <label>
            Reservation Time:
            <input type="datetime-local" value={reservationTime} onChange={(e) => setReservationTime(e.target.value)} required />
          </label>
          <label>
            Status:
            <select value={status} onChange={(e) => setStatus(e.target.value)} required>
              <option value="pendiente">Pending</option>
              <option value="confirmada">Confirmed</option>
              <option value="cancelada">Cancelled</option>
            </select>
          </label>
          <button type="submit">Update Reservation</button>
        </>
      )}
    </form>
  );
};

export default EditReservation;
