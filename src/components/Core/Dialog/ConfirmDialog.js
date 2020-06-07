import React from 'react';
import {
  DialogTitle,
  DialogContent,
  Dialog,
  DialogActions,
  Button,
} from '@material-ui/core';

export const ConfirmDialog = ({
  title,
  open,
  handleCancel,
  handleOK,
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
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOK} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
