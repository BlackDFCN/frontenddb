import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/AdminEmployees.css'; // Asegúrate de importar el archivo CSS

const AdminUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users from the server
        axios.get('/api/admin/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div className="admin-employees-container">
            <h1>Manage Users</h1>
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
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

export default AdminUsers;
