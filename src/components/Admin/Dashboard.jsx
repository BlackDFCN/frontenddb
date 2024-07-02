import React from 'react';
import { Link } from 'react-router-dom';
import './css/AdminDashboard.css'; 

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard-container">
            <h1>Admin Dashboard</h1>
            <nav>
                <ul className="admin-menu">
                    <li><Link to="/admin/reservations" className="admin-menu-item">Manage Reservations</Link></li>
                    <li><Link to="/admin/tables" className="admin-menu-item">Manage Tables</Link></li>
                    <li><Link to="/admin/customers" className="admin-menu-item">Manage Customers</Link></li>
                    <li><Link to="/admin/employees" className="admin-menu-item">Manage Employees</Link></li>
                    <li><Link to="/admin/roles" className="admin-menu-item">Manage Roles</Link></li>
                    <li><Link to="/admin/users" className="admin-menu-item">Manage Users</Link></li>
                    <li><Link to="/admin/reports" className="admin-menu-item">Generate Reports</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default AdminDashboard;
