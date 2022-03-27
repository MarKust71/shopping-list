import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import { MainRouter } from 'routing/MainRouter';
import { AppContainer } from 'ui/containers/appContainer/AppContainer';
import { AppProviders } from 'app/main/appProviders/AppProviders';

export const App = () => {
  return (
    <>
      <Helmet>
        <title>{'Shopping List'}</title>
      </Helmet>
      <AppProviders>
        <AppContainer>
          <BrowserRouter>
            <MainRouter />
          </BrowserRouter>
        </AppContainer>
      </AppProviders>
    </>
  );
};
