import React from 'react';
import { Link } from 'react-router-dom';
import authService from '../services/authService';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    authService.logout();
    window.location.href = '/login';
  };

  return (
    <nav>
      <ul>
        {user ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            {user.roleId === 1 && <li><Link to="/manage-roles">Manage Roles</Link></li>}
            {user.roleId === 1 && <li><Link to="/manage-permissions">Manage Permissions</Link></li>}
            {user.roleId !== 3 && <li><Link to="/tables">Tables</Link></li>}
            <li><Link to="/reservations">Reservations</Link></li>
            {user.roleId !== 3 && <li><Link to="/reports/daily">Daily Report</Link></li>}
            {user.roleId !== 3 && <li><Link to="/reports/weekly">Weekly Report</Link></li>}
            {user.roleId !== 3 && <li><Link to="/reports/monthly">Monthly Report</Link></li>}
            {user.roleId === 1 && <li><Link to="/change-logs">Change Logs</Link></li>}
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
