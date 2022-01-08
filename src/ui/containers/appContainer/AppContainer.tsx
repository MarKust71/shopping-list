import React from 'react';
import { Box, useTheme } from '@mui/material';

import { AppContainerProps } from './AppContainer.types';
import { useStyles } from './AppContainer.styles';

export const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <Box className={classes.container}>{children}</Box>;
};
