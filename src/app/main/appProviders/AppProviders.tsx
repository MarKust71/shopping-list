import React from 'react';
import { ThemeProvider } from '@mui/material';

import { AuthenticationProvider } from 'providers/authentication/AuthenticationProvider';
import { theme } from 'theme/theme';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <AuthenticationProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AuthenticationProvider>
  );
};
