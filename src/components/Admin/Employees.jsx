import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/AdminEmployees.css';
const AdminEmployees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        // Fetch employees from the server
        axios.get('/api/admin/employees')
            .then(response => setEmployees(response.data))
            .catch(error => console.error('Error fetching employees:', error));
    }, []);

    return (
        <div className="admin-employees-container">
            <h1>Manage Employees</h1>
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.position}</td>
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

export default AdminEmployees;