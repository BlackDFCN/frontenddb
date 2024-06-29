import React, { useState, useEffect } from 'react';
import tableService from '../services/tableService';

const EditTable = ({ match }) => {
  const [table, setTable] = useState(null);
  const [tableNumber, setTableNumber] = useState('');
  const [capacity, setCapacity] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    async function fetchTable() {
      try {
        const data = await tableService.getTable(match.params.id);
        setTable(data);
        setTableNumber(data.table_number);
        setCapacity(data.capacity);
        setStatus(data.status);
      } catch (err) {
        console.error('Error fetching table', err);
      }
    }
    fetchTable();
  }, [match.params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await tableService.updateTable(match.params.id, { table_number: tableNumber, capacity, status });
      alert('Table updated successfully');
    } catch (err) {
      console.error('Error updating table', err);
      alert('Failed to update table');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Table</h2>
      {table && (
        <>
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
            <select value={status} onChange={(e) => setStatus(e.target.value)} required>
              <option value="disponible">Available</option>
              <option value="reservada">Reserved</option>
              <option value="mantenimiento">Maintenance</option>
            </select>
          </label>
          <button type="submit">Update Table</button>
        </>
      )}
    </form>
  );
};

export default EditTable;
