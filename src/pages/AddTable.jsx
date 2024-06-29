import React, { useState } from 'react';
import tableService from '../services/tableService';

const AddTable = () => {
  const [tableNumber, setTableNumber] = useState('');
  const [capacity, setCapacity] = useState('');
  const [status, setStatus] = useState('disponible');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await tableService.addTable({ tableNumber, capacity, status });
      alert('Table added successfully');
    } catch (err) {
      console.error('Error adding table', err);
      alert('Failed to add table');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Table</h2>
      <label>
        Table Number:
        <input type="number" value={tableNumber} onChange={(e) => setTableNumber(e.target.value)} required />
      </label>
      <label>
        Capacity:
        <input type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)} required />
      </label>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="disponible">Available</option>
          <option value="reservada">Reserved</option>
          <option value="mantenimiento">Maintenance</option>
        </select>
      </label>
      <button type="submit">Add Table</button>
    </form>
  );
};

export default AddTable;
