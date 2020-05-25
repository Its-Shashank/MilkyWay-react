import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(true);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
  const handleClose = () => {
    setOpen(false);
    props.history.push('/')
  };

  const controlPaymentDays = () => {
    if (props.days === '1') {
        return <Typography gutterBottom>You have to pay daily to our delivery guy at the time of delivery.</Typography>
    }
    else if (props.days === '30') {
      return <Typography gutterBottom>You have to pay within 15 days from the start of your subscription to delivery guy.</Typography>
    }
    else if (props.days === '90') {
      return <Typography gutterBottom>You have to pay within 30 days of from the start of your subscription to our delivery guy.</Typography>
    }
    else {
      return <Typography gutterBottom>You have to pay within 3 months from the start of your subscription to our delivery guy.</Typography>
    }
  }

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Order Successful
        </DialogTitle>
        <DialogContent dividers>
          {controlPaymentDays()}
          <Typography gutterBottom>
            Your total is {props.total}.
          </Typography>
          <Typography gutterBottom>
            Good day.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Home
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
