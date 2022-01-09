import firebase from '../config/firebase.config';

export const socialMediaAuth = async (provider: firebase.auth.AuthProvider) => {
  try {
    const res = await firebase.auth().signInWithPopup(provider);
    console.log(res.user);
    return res.user;
  } catch (error) {
    console.log('Error:', error);
    return error;
  }
};
