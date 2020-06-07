import React from 'react';
import { DialogTitle, DialogContent, Dialog } from '@material-ui/core';

export const FormDialog = ({
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
      </Dialog>
    </>
  );
};
