// src/components/PrivateRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/user';

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { user } = useUser();

  // Check if user is authenticated
  return user ? <>{element}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
