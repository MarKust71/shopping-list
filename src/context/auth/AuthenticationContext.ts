import React from 'react';

import { AuthenticationContextProps } from './AuthenticationContext.types';

export const AuthenticationContext = React.createContext<AuthenticationContextProps | undefined>(undefined);
