import React from 'react';
import { Box, useTheme } from '@mui/material';
import { isMobile } from 'react-device-detect';

import { AppContainerProps } from './AppContainer.types';
import { useStyles } from './AppContainer.styles';

export const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const MobileContainer: React.FC = isMobile
    ? ({ children }) => <>{children}</>
    : ({ children }) => (
        <Box className={classes.mobileContainer}>
          <Box className={classes.deviceWrapper}>{children}</Box>
        </Box>
      );

  return (
    <Box className={classes.container}>
      <MobileContainer>{children}</MobileContainer>
    </Box>
  );
};
