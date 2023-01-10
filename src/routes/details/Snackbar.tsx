import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';

type CustomizedSnackbarsProps = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    message: AlertColor | undefined
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({open, setOpen, message}: CustomizedSnackbarsProps) {

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={message} sx={{ width: '100%' }}>
          {message==="success" ? "This item has been added to yout bag!" : "There has been an error"} 
        </Alert>
      </Snackbar>
    </Stack>
  );
}
