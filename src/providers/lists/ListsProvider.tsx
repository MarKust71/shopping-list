import React, { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { ListsContext } from 'context/lists/ListsContext';
import { firebaseDb } from 'config/firebase.config';
import { onError, onSuccess } from '../providersHelpers';

import { ListItem } from './ListProvider.types';

export const ListsProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [docsFromCollection, setDocsFromCollection] = useState<ListItem[]>([]);

  const getCollection = async (collectionName: string) => {
    return await collection(firebaseDb, collectionName);
  };

  const getDocsFromCollection = async (collectionName: string) => {
    setLoading(true);
    try {
      const snapshot = await getDocs(await getCollection(collectionName));
      const newDocs: ListItem[] = [];
      snapshot.forEach((doc) => newDocs.push({ id: doc.id, name: doc.data().name }));
      setDocsFromCollection(newDocs);
      snapshot.forEach((doc) => console.log(`${doc.id} => ${JSON.stringify(doc.data())}`));

      return onSuccess(setLoading, `'${collectionName}' collection docs fetched successfully`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return onError(setLoading, `Error occured: ${error.message}`);
    }
  };

  return (
    <ListsContext.Provider value={{ loading, getDocsFromCollection, docsFromCollection }}>
      {children}
    </ListsContext.Provider>
  );
};
