import React from 'react';
import { ThemeProvider } from '@mui/material';
import { Helmet } from 'react-helmet';

import { theme } from './theme/theme';
import { MainRouter } from './routing/MainRouter';
import { AppContainer } from './ui/containers/appContainer/AppContainer';

export const App = () => {
  return (
    <>
      <Helmet>
        <title>Shopping List</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <MainRouter />
        </AppContainer>
      </ThemeProvider>
    </>
  );
};
