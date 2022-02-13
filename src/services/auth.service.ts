import { AuthProvider, signInWithPopup } from 'firebase/auth';

import { firebaseAuth } from 'config/firebase.config';

export const socialMediaAuth = async (provider: AuthProvider) => {
  try {
    const res = await signInWithPopup(firebaseAuth, provider);
    console.log(res.user);
    return res.user;
  } catch (error) {
    console.log('Error:', error);
    return error;
  }
};
