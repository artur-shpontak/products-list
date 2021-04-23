import React from 'react';
import { DialogRemoveType } from '../../types';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

export const DialogRemove = ({
  open,
  handleSubmit,
  handleClose,
  product
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="remove-dialog-title"
    >
      <DialogTitle id="remove-dialog-title">Remove product</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure you want to remove the product?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          size="small"
          color="secondary"
          value={product.id}
          onClick={handleSubmit}
        >
          Remove
        </Button>
        <Button
          size="small"
          onClick={handleClose}
          color="primary"
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DialogRemove.propTypes = DialogRemoveType;
