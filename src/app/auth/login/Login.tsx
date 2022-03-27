import React from 'react';
import { Button, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuthenticationContext } from 'hooks/useAuthenticationContext/useAuthenticationContext';

import { LoginProps } from './Login.types';
import { useStyles } from './Login.styles';

type LocationProps = {
  state: {
    from: Location;
  };
};

export const Login: React.FC<LoginProps> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { login } = useAuthenticationContext();
  const location = useLocation() as LocationProps;
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleClick = async () => {
    await login();
    navigate(from, { replace: true });
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      Login
    </Button>
  );
};
