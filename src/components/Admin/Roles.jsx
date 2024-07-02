import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminRoles = () => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        // Fetch roles from the server
        axios.get('/api/admin/roles')
            .then(response => setRoles(response.data))
            .catch(error => console.error('Error fetching roles:', error));
    }, []);

    return (
        <div>
            <h1>Manage Roles</h1>
            <ul>
                {roles.map(role => (
                    <li key={role.id}>{role.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminRoles;
