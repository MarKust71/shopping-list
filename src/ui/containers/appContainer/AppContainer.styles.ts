import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    minHeight: '100vh',
    padding: theme.spacing(2),
  },
  mobileContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  deviceWrapper: {
    width: '360px',
    height: '760px',
    border: '1px solid black',
    borderRadius: '4px',
    padding: theme.spacing(2),
  },
}));
