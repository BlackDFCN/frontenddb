import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/AdminCoustomers.css'; // Asegúrate de importar el archivo CSS

const AdminCustomers = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        // Fetch customers from the server
        axios.get('/api/admin/customers')
            .then(response => setCustomers(response.data))
            .catch(error => console.error('Error fetching customers:', error));
    }, []);

    return (
        <div className="admin-customers-container">
            <h1>Manage Customers</h1>
            <table className="customer-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
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

export default AdminCustomers;

