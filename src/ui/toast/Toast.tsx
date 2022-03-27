import React from 'react';
import { Snackbar, useTheme } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { ToastProps } from './Toast.types';
import { useStyles } from './Toast.styles';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Toast: React.FC<ToastProps> = ({ message, severity, autoHideDuration, isOpen }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [open, setOpen] = React.useState(isOpen);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
