import React, { useState } from 'react';
import { Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Toast } from 'ui/toast/Toast';
import { ToastPropsSeverity } from 'ui/toast/Toast.types';
import { useAuthenticationContext } from 'hooks/useAuthenticationContext/useAuthenticationContext';

import { LogoutProps } from './Logout.types';
import { useStyles } from './Logout.styles';

export const Logout: React.FC<LogoutProps> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const navigate = useNavigate();
  const { logout } = useAuthenticationContext();

  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    logout();
    setShowToast(true);
    navigate('/');
  };

  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        Logout
      </Button>
      <Toast
        message="You hav been successfully logged out"
        severity={ToastPropsSeverity.SUCCESS}
        autoHideDuration={3000}
        isOpen={showToast}
      />
    </>
  );
};
