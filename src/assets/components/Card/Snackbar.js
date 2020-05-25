import React from 'react';
import {Snackbar, Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom'

export default function SimpleSnackbar(props) {
  const style = {
    color: 'red',
    textDecoration: 'none',
    fontSize: '10px',
    padding: '0 20px'
  }
  
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={props.message}
        action={
          <React.Fragment>

            { props.isSignedUp ? (<Button color="secondary" size="small" onClick={handleClose}>
              <Link style={style} to='/login'>Login now!</Link>
            </Button>) : ( <></> ) }
            
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
