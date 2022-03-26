import React, { useEffect } from 'react';
import { Typography, useTheme } from '@mui/material';

import { useListsContext } from 'hooks/useListsContext/useListsContext';

import { MainProps } from './Main.types';
import { useStyles } from './Main.styles';

export const Main: React.FC<MainProps> = ({}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { getDocsFromCollection, docsFromCollection } = useListsContext();

  useEffect(() => {
    console.log({ docsFromCollection });
  }, [docsFromCollection]);

  useEffect(() => {
    getDocsFromCollection('lists');
    getDocsFromCollection('products');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Typography className={classes.wrapper}>Shopping List</Typography>;
};
