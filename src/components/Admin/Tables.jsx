import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminTables = () => {
    const [tables, setTables] = useState([]);

    useEffect(() => {
        // Fetch tables from the server
        axios.get('/api/admin/tables')
            .then(response => setTables(response.data))
            .catch(error => console.error('Error fetching tables:', error));
    }, []);

    return (
        <div>
            <h1>Manage Tables</h1>
            <ul>
                {tables.map(table => (
                    <li key={table.id}>{table.details}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminTables;
