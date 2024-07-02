import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <h1>Tables</h1>
      <ul>
        {tables.map((table) => (
          <li key={table.table_id}>
            Table {table.table_number} - Capacity: {table.capacity} - Status: {table.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tables;
