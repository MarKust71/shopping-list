import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    minHeight: '100vh',
    padding: theme.spacing(2),
  },
}));
