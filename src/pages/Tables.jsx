import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TableList = () => {
  const [tables, setTables] = useState([]);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('user'))?.token;
        const response = await axios.get('http://localhost:5000/api/tables', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setTables(response.data);
      } catch (err) {
        console.error('Error fetching tables', err);
      }
    };

    const fetchUserRole = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        setUserRole(user.role_id);
      }
    };

    fetchTables();
    fetchUserRole();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem('user'))?.token;
      await axios.delete(`http://localhost:5000/api/tables/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setTables(tables.filter(table => table.table_id !== id));
    } catch (err) {
      console.error('Error deleting table', err);
      alert('Failed to delete table');
    }
  };

  return (
    <div className="table-list">
      <h2>Table List</h2>
      <ul>
        {tables.map(table => (
          <li key={table.table_id} className="table-item">
            <p>Table Number: {table.table_number}</p>
            <p>Capacity: {table.capacity}</p>
            <p>Status: {table.status}</p>
            {userRole === 1 && ( // Mostrar solo si el usuario es administrador
              <>
                <Link to={`/edit-table/${table.table_id}`} className="edit-link">Edit</Link>
                <button onClick={() => handleDelete(table.table_id)} className="delete-btn">Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableList;
