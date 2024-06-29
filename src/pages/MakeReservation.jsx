import React, { useState, useEffect } from 'react';
import reservationService from '../services/reservationService';
import tableService from '../services/tableService';

const MakeReservation = () => {
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState('');
  const [reservationTime, setReservationTime] = useState('');

  useEffect(() => {
    async function fetchTables() {
      try {
        const data = await tableService.getTables();
        setTables(data);
      } catch (err) {
        console.error('Error fetching tables', err);
      }
    }
    fetchTables();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await reservationService.makeReservation({ table_id: selectedTable, reservation_time: reservationTime, status: 'pendiente' });
      alert('Reservation made successfully');
    } catch (err) {
      console.error('Error making reservation', err);
      alert('Failed to make reservation');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make Reservation</h2>
      <label>
        Table:
        <select value={selectedTable} onChange={(e) => setSelectedTable(e.target.value)} required>
          {tables.map(table => (
            <option key={table.table_id} value={table.table_id}>
              {table.table_number} - {table.capacity}
            </option>
          ))}
        </select>
      </label>
      <label>
        Reservation Time:
        <input type="datetime-local" value={reservationTime} onChange={(e) => setReservationTime(e.target.value)} required />
      </label>
      <button type="submit">Make Reservation</button>
    </form>
  );
};

export default MakeReservation;
