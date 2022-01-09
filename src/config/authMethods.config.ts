import firebase from './firebase.config';
import 'firebase/compat/auth';

export const googleProvider = new firebase.auth.GoogleAuthProvider();
