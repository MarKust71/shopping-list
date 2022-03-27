import firebase from 'firebase/compat';

export type AuthenticationContextProps = {
  currentUser: firebase.UserInfo | null;
  login: () => void;
  logout: () => void;
  loading: boolean;
};
