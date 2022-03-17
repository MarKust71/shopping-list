import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat';
import { onAuthStateChanged } from 'firebase/auth';

import { AuthContext } from 'context/auth/AuthContext';
import { firebaseAuth } from 'config/firebase.config';

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.UserInfo | null>(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
