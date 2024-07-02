import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminEmployees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        // Fetch employees from the server
        axios.get('/api/admin/employees')
            .then(response => setEmployees(response.data))
            .catch(error => console.error('Error fetching employees:', error));
    }, []);

    return (
        <div>
            <h1>Manage Employees</h1>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>{employee.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminEmployees;
