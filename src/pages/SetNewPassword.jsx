import React, { useState } from 'react';
import authService from '../services/authService';

const SetNewPassword = ({ match }) => {
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.setNewPassword(match.params.token, newPassword);
      alert('Password updated successfully');
    } catch (err) {
      console.error('Error setting new password', err);
      alert('Failed to set new password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Set New Password</h2>
      <label>
        New Password:
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
      </label>
      <button type="submit">Set New Password</button>
    </form>
  );
};

export default SetNewPassword;
