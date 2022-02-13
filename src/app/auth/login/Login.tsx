import React from 'react';
import { Button, useTheme } from '@mui/material';
import { AuthProvider } from 'firebase/auth';

import { googleProvider } from 'config/authMethods.config';
import { socialMediaAuth } from 'services/auth.service';

import { LoginProps } from './Login.types';
import { useStyles } from './Login.styles';

export const Login: React.FC<LoginProps> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const handleClick = async (provider: AuthProvider) => {
    const res = await socialMediaAuth(provider);
  };

  return (
    <Button variant="contained" onClick={() => handleClick(googleProvider)}>
      Login
    </Button>
  );
};
