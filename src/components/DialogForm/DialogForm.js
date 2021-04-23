import React, { useState } from 'react';
import { DialogFormType } from '../../types';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';

export const DialogForm = ({
  open,
  handleClose,
  handleSubmit,
  isNewItem,
  initialProduct,
}) => {
  const [isDisabledEditing, setIsDisabledEditing] = useState(!isNewItem);
  const [product, setProduct] = useState(initialProduct);

  const onSubmit = () => {
    handleSubmit(product);

    if (!isNewItem) {
      changeEditPermission()

      return;
    }

    setProduct(initialProduct);
    handleClose();
  }

  const changeEditPermission = () => {
    setIsDisabledEditing(!isDisabledEditing);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProduct({...product, [name]: value});
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        {isNewItem ? 'Add product' : initialProduct.name}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {isNewItem ? 'Add new product' : 'Product'}
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          value={product.name}
          disabled={isDisabledEditing}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="description"
          label="Description"
          type="text"
          fullWidth
          multiline
          value={product.description}
          disabled={isDisabledEditing}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="imageUrl"
          label="Image Url"
          type="text"
          fullWidth
          value={product.imageUrl}
          disabled={isDisabledEditing}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="height"
          label="Height"
          type="number"
          value={product.height}
          disabled={isDisabledEditing}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="width"
          label="Width"
          type="number"
          value={product.width}
          disabled={isDisabledEditing}
          onChange={handleChange}
        />
        <br/>
        <TextField
          margin="dense"
          id="quantity"
          name="quantity"
          label="Quantity"
          type="number"
          value={product.quantity}
          disabled={isDisabledEditing}
          onChange={handleChange}
        />
        <br/>
        <TextField
          margin="dense"
          name="weight"
          label="Weight"
          type="number"
          value={product.weight}
          disabled={isDisabledEditing}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button
          size="small"
          color="primary"
          onClick={isDisabledEditing ? changeEditPermission : onSubmit}
        >
          {isDisabledEditing ? 'Edit' : 'Save'}
        </Button>
        <Button
          size="small"
          onClick={isDisabledEditing ? handleClose : changeEditPermission}
          color="secondary"
        >
          {isDisabledEditing ? 'Close' : 'Cancel'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DialogForm.defaultProps = {
  isNewItem: false,
  initialProduct: {
    name: '',
    description: '',
    imageUrl: '',
    height: '',
    width: '',
    quantity: '',
    weight: '',
  }
}

DialogForm.propTypes = DialogFormType;
