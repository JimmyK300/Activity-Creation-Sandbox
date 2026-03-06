import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../localStorage/useAuth';

const AuthGuard: React.FC = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
export default AuthGuard;
