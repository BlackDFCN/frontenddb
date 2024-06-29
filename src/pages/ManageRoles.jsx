import React, { useState, useEffect } from 'react';
import authService from '../services/authService';

const ManageRoles = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState('');

  useEffect(() => {
    async function fetchRoles() {
      try {
        const data = await authService.getRoles();
        setRoles(data);
      } catch (err) {
        console.error('Error fetching roles', err);
      }
    }
    fetchRoles();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.createRole(newRole);
      setNewRole('');
      const data = await authService.getRoles();
      setRoles(data);
      alert('Role created successfully');
    } catch (err) {
      console.error('Error creating role', err);
      alert('Failed to create role');
    }
  };

  return (
    <div>
      <h2>Manage Roles</h2>
      <form onSubmit={handleSubmit}>
        <label>
          New Role:
          <input type="text" value={newRole} onChange={(e) => setNewRole(e.target.value)} required />
        </label>
        <button type="submit">Create Role</button>
      </form>
      <ul>
        {roles.map(role => (
          <li key={role.role_id}>{role.role_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ManageRoles;
