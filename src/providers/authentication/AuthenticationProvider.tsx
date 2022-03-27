import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat';
import { onAuthStateChanged, signInWithPopup, AuthProvider, signOut } from 'firebase/auth';

import { AuthenticationContext } from 'context/auth/AuthenticationContext';
import { firebaseAuth } from 'config/firebase.config';
import { onError, onSuccess } from 'providers/providersHelpers';
import { googleProvider } from 'config/authMethods.config';

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
      await signInWithPopup(firebaseAuth, provider);

      return onSuccess(setLoading, 'User logged in successfully');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return onError(setLoading, `Error occured: ${error.message}`);
    }
  };

  const login = async () => {
    await socialMediaAuth(googleProvider);
  };

  const logout = async () => {
    signOut(firebaseAuth);
  };

  return (
    <AuthenticationContext.Provider value={{ currentUser, login, logout, loading }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
