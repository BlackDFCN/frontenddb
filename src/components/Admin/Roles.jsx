import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/AdminRoles.css'; // Asegúrate de importar el archivo CSS

const AdminRoles = () => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        // Fetch roles from the server
        axios.get('/api/admin/roles')
            .then(response => setRoles(response.data))
            .catch(error => console.error('Error fetching roles:', error));
    }, []);

    return (
        <div className="admin-roles-container">
            <h1>Manage Roles</h1>
            <table className="role-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map(role => (
                        <tr key={role.id}>
                            <td>{role.id}</td>
                            <td>{role.name}</td>
                            <td>{role.description}</td>
                            <td>
                                <button className="action-button edit-button">Edit</button>
                                <button className="action-button delete-button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminRoles;
