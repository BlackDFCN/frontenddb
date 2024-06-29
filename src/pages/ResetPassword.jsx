import React, { useState } from 'react';
import authService from '../services/authService';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.resetPassword(email);
      alert('Password reset email sent');
    } catch (err) {
      console.error('Error resetting password', err);
      alert('Failed to reset password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reset Password</h2>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ResetPassword;
