import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { Typography } from '@mui/material';

import { useAuthenticationContext } from 'hooks/useAuthenticationContext/useAuthenticationContext';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { currentUser, loading } = useAuthenticationContext();
  const location = useLocation();

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
