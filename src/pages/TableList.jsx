import React, { useState, useEffect } from 'react';
import tableService from '../services/tableService';

const TableList = () => {
  const [tables, setTables] = useState([]);

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

  return (
    <div>
      <h2>Table List</h2>
      <ul>
        {tables.map(table => (
          <li key={table.table_id}>
            Table Number: {table.table_number}, Capacity: {table.capacity}, Status: {table.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableList;
