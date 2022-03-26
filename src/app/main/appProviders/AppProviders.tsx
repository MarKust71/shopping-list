import React from 'react';
import { ThemeProvider } from '@mui/material';

import { AuthenticationProvider } from 'providers/authentication/AuthenticationProvider';
import { theme } from 'theme/theme';
import { ListsProvider } from 'providers/lists/ListsProvider';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthenticationProvider>
        <ListsProvider>{children}</ListsProvider>
      </AuthenticationProvider>
    </ThemeProvider>
  );
};
