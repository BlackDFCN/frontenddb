import React, { useState } from 'react';
import authService from '../services/authService';

const SetNewPassword = ({ location }) => {
  const [newPassword, setNewPassword] = useState('');
  const query = new URLSearchParams(location.search);
  const token = query.get('token');

  const handleSetNewPassword = async (e) => {
    e.preventDefault();
    try {
      await authService.setNewPassword(token, newPassword);
      alert('Password updated successfully!');
    } catch (error) {
      alert('Error updating password');
    }
  };

  return (
    <div>
      <h2>Set New Password</h2>
      <form onSubmit={handleSetNewPassword}>
        <div>
          <label>New Password</label>
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
        </div>
        <button type="submit">Set New Password</button>
      </form>
    </div>
  );
};

export default SetNewPassword;
