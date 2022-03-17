import React from 'react';
import { ThemeProvider } from '@mui/material';
import { Helmet } from 'react-helmet';

import { theme } from 'theme/theme';
import { MainRouter } from 'routing/MainRouter';
import { AppContainer } from 'ui/containers/appContainer/AppContainer';
import { useAuthContext } from 'hooks/useAuthContext/useAuthContext';

export const App = () => {
  const { currentUser } = useAuthContext();

  return (
    <>
      <Helmet>
        <title>{`Shopping List - ${currentUser ? 'LOOGED-IN' : 'LOGGED-OUT'}`}</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <MainRouter />
        </AppContainer>
      </ThemeProvider>
    </>
  );
};
