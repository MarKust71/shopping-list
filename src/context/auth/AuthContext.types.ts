import firebase from 'firebase/compat';

export type AuthContextProps = {
  currentUser: firebase.UserInfo | null;
};
