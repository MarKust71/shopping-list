import React, { useEffect } from 'react';
import { Typography, useTheme } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';

import { firebaseDb } from 'config/firebase.config';

import { MainProps } from './Main.types';
import { useStyles } from './Main.styles';

export const Main: React.FC<MainProps> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const getCollection = async (collectionName: string) => {
    return await collection(firebaseDb, collectionName);
  };

  const getDocsFromCollection = async (collectionName: string) => {
    const snapshot = await getDocs(await getCollection(collectionName));
    snapshot.forEach((doc) => console.log(`${doc.id} => ${JSON.stringify(doc.data())}`));
  };

  useEffect(() => {
    getDocsFromCollection('lists');
    getDocsFromCollection('products');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Typography className={classes.wrapper}>Shopping List</Typography>;
};
