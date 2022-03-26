import React from 'react';

import { ListsContextProps } from './ListsContext.types';

export const ListsContext = React.createContext<ListsContextProps | undefined>(undefined);
