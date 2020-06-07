import React from 'react';
import {
  DialogTitle,
  DialogContent,
  Dialog,
  DialogActions,
} from '@material-ui/core';

export const ConfirmDialog = ({
  Component,
  title,
  open,
  handleClose,
  children,
}) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
