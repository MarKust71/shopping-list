import { useContext } from 'react';

import { ListsContextProps } from 'context/lists/ListsContext.types';
import { ListsContext } from 'context/lists/ListsContext';

export const useListsContext: () => ListsContextProps = () => {
  const context = useContext(ListsContext);

  if (context === undefined) {
    throw Error('useListsContext must be used within a ListsContext');
  }

  return context;
};
