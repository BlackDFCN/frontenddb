import React, { useState } from 'react';
import authService from '../services/authService';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await authService.resetPassword(email);
      alert('Password reset email sent!');
    } catch (error) {
      alert('Error sending reset email');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Send Reset Email</button>
      </form>
    </div>
  );
};

export default ResetPassword;
