import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeCustomers = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        // Fetch customers from the server
        axios.get('/api/employee/customers')
            .then(response => setCustomers(response.data))
            .catch(error => console.error('Error fetching customers:', error));
    }, []);

    return (
        <div>
            <h1>Manage Customers</h1>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>{customer.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeCustomers;
