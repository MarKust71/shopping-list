import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat';
import { onAuthStateChanged, signInWithPopup, AuthProvider } from 'firebase/auth';

import { AuthenticationContext } from 'context/auth/AuthenticationContext';
import { firebaseAuth } from 'config/firebase.config';
import { onError, onSuccess } from 'providers/providersHelpers';

export const AuthenticationProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<firebase.UserInfo | null>(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  const socialMediaAuth = async (provider: AuthProvider) => {
    setLoading(true);
    try {
      const result = await signInWithPopup(firebaseAuth, provider);
      console.log(result.user);

      return onSuccess(setLoading, 'User logged in successfully');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return onError(setLoading, `Error occured: ${error.message}`);
    }
  };

  return (
    <AuthenticationContext.Provider value={{ currentUser, socialMediaAuth, loading }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
