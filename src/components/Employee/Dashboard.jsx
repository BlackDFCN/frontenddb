import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeDashboard = () => {
    return (
        <div>
            <h1>Employee Dashboard</h1>
            <nav>
                <ul>
                    <li><Link to="/employee/reservations">Manage Reservations</Link></li>
                    <li><Link to="/employee/tables">Manage Tables</Link></li>
                    <li><Link to="/employee/customers">Manage Customers</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default EmployeeDashboard;
