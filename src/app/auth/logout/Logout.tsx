import React from 'react';
import { Button, useTheme } from '@mui/material';
import { signOut } from 'firebase/auth';

import { firebaseAuth } from 'config/firebase.config';

import { LogoutProps } from './Logout.types';
import { useStyles } from './Logout.styles';

export const Logout: React.FC<LogoutProps> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const handleClick = () => {
    signOut(firebaseAuth);
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      Logout
    </Button>
  );
};
