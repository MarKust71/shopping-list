import React from 'react';

import { FirebaseBasicResponse } from 'config/Firebase.types';

export const onSuccess = (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  message: string,
): FirebaseBasicResponse => {
  setLoading(false);

  return {
    success: true,
    message: message,
  };
};

export const onError = (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  message: string,
): FirebaseBasicResponse => {
  setLoading(false);

  return {
    success: false,
    message: message,
  };
};
