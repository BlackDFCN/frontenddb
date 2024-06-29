import React, { useState, useEffect } from 'react';
import authService from '../services/authService';

const ManagePermissions = () => {
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedPermission, setSelectedPermission] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const roleData = await authService.getRoles();
        const permissionData = await authService.getPermissions();
        setRoles(roleData);
        setPermissions(permissionData);
      } catch (err) {
        console.error('Error fetching data', err);
      }
    }
    fetchData();
  }, []);

  const handleAssign = async (e) => {
    e.preventDefault();
    try {
      await authService.assignPermission(selectedRole, selectedPermission);
      alert('Permission assigned successfully');
    } catch (err) {
      console.error('Error assigning permission', err);
      alert('Failed to assign permission');
    }
  };

  return (
    <form onSubmit={handleAssign}>
      <h2>Manage Permissions</h2>
      <label>
        Role:
        <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} required>
          {roles.map(role => (
            <option key={role.role_id} value={role.role_id}>
              {role.role_name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Permission:
        <select value={selectedPermission} onChange={(e) => setSelectedPermission(e.target.value)} required>
          {permissions.map(permission => (
            <option key={permission.permission_id} value={permission.permission_id}>
              {permission.permission_name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Assign Permission</button>
    </form>
  );
};

export default ManagePermissions;
