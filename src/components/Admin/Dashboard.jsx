import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <nav>
                <ul>
                    <li><Link to="/admin/reservations">Manage Reservations</Link></li>
                    <li><Link to="/admin/tables">Manage Tables</Link></li>
                    <li><Link to="/admin/customers">Manage Customers</Link></li>
                    <li><Link to="/admin/employees">Manage Employees</Link></li>
                    <li><Link to="/admin/roles">Manage Roles</Link></li>
                    <li><Link to="/admin/users">Manage Users</Link></li>
                    <li><Link to="/admin/reports">Generate Reports</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default AdminDashboard;
