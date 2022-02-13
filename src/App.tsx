import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { Helmet } from 'react-helmet';
import { onAuthStateChanged } from 'firebase/auth';

import { theme } from 'theme/theme';
import { MainRouter } from 'routing/MainRouter';
import { AppContainer } from 'ui/containers/appContainer/AppContainer';
import { firebaseAuth } from 'config/firebase.config';

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>{`Shopping List - ${isLoggedIn ? 'LOOGED-IN' : 'LOGGED-OUT'}`}</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <MainRouter />
        </AppContainer>
      </ThemeProvider>
    </>
  );
};
