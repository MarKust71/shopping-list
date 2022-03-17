import { useContext } from 'react';

import { AuthContextProps } from 'context/auth/AuthContext.types';
import { AuthContext } from 'context/auth/AuthContext';

export const useAuthContext: () => AuthContextProps = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw Error('useAuthContext must be used within an AuthContext');
  }

  return context;
};
