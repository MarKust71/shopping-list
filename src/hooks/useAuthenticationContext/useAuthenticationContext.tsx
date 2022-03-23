import { useContext } from 'react';

import { AuthenticationContextProps } from 'context/auth/AuthenticationContext.types';
import { AuthenticationContext } from 'context/auth/AuthenticationContext';

export const useAuthenticationContext: () => AuthenticationContextProps = () => {
  const context = useContext(AuthenticationContext);

  if (context === undefined) {
    throw Error('useAuthenticationContext must be used within an AuthenticationContext');
  }

  return context;
};
