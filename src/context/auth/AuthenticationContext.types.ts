import firebase from 'firebase/compat';
import { AuthProvider } from 'firebase/auth';

import { FirebaseBasicResponse } from 'config/Firebase.types';

export type AuthenticationContextProps = {
  currentUser: firebase.UserInfo | null;
  socialMediaAuth: (provider: AuthProvider) => Promise<FirebaseBasicResponse>;
  loading: boolean;
};
