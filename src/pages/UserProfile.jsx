import React, { useState, useEffect } from 'react';
import authService from '../services/authService';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const data = await authService.getUserProfile();
        setUser(data);
      } catch (err) {
        console.error('Error fetching user profile', err);
      }
    }
    fetchUserProfile();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role_id}</p>
          <p>Created At: {user.created_at}</p>
          <p>Updated At: {user.updated_at}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
