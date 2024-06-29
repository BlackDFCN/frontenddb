import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import authService from '../services/authService';

const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
  const currentUser = authService.getCurrentUser();
  
  return (
    <Route
      {...rest}
      render={props => {
        if (!currentUser) {
          // Not logged in, redirect to login
          return <Navigate to="/login" />;
        }

        // Check if the route is restricted by role
        if (roles && roles.indexOf(currentUser.roleId) === -1) {
          // Role not authorized so redirect to home page
          return <Navigate to={{ pathname: '/' }} />;
        }

        // Authorized, so return the component
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
