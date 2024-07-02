import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import '../styles/Tables.css';

function Tables() {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tables');
        setTables(response.data);
      } catch (err) {
        console.error('Error fetching tables', err);
      }
    };
    fetchTables();
  }, []);

  return (
    <div>
      <Navbar />
    <div className="tables-container">
      <h1>Mesas</h1>
      <table className="tables-table">
        <thead>
          <tr>
            <th>Número de Mesa</th>
            <th>Capacidad</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((table) => (
            <tr key={table.table_id}>
              <td>{table.table_number}</td>
              <td>{table.capacity}</td>
              <td>{table.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default Tables;