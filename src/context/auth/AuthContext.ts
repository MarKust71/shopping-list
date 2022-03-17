import React from 'react';

import { AuthContextProps } from './AuthContext.types';

export const AuthContext = React.createContext<AuthContextProps | undefined>(undefined);
