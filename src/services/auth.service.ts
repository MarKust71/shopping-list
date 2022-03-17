import { AuthProvider, signInWithPopup } from 'firebase/auth';

import { firebaseAuth } from 'config/firebase.config';

export const socialMediaAuth = async (provider: AuthProvider) => {
  try {
    const result = await signInWithPopup(firebaseAuth, provider);
    console.log(result.user);

    return result.user;
  } catch (error) {
    console.log('Error:', error);

    return error;
  }
};
