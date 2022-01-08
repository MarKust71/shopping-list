import React from 'react';
import { Typography, useTheme } from '@mui/material';

import { LoginProps } from './Login.types';
import { useStyles } from './Login.styles';

export const Login: React.FC<LoginProps> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <Typography>Login</Typography>;
};
