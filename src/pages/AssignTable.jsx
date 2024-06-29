import React, { useState, useEffect } from 'react';
import reservationService from '../services/reservationService';
import tableService from '../services/tableService';

const AssignTable = () => {
  const [reservations, setReservations] = useState([]);
  const [tables, setTables] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState('');
  const [selectedTable, setSelectedTable] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const reservationData = await reservationService.getAllReservations();
        const tableData = await tableService.getTables();
        setReservations(reservationData);
        setTables(tableData);
      } catch (err) {
        console.error('Error fetching data', err);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await reservationService.assignTable(selectedReservation, selectedTable);
      alert('Table assigned successfully');
    } catch (err) {
      console.error('Error assigning table', err);
      alert('Failed to assign table');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Assign Table</h2>
      <label>
        Reservation:
        <select value={selectedReservation} onChange={(e) => setSelectedReservation(e.target.value)} required>
          {reservations.map(res => (
            <option key={res.reservation_id} value={res.reservation_id}>
              {res.customer_name} - {res.reservation_time}
            </option>
          ))}
        </select>
      </label>
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
      <button type="submit">Assign Table</button>
    </form>
  );
};

export default AssignTable;
