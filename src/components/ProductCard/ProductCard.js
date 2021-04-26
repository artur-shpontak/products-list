import React, { useState, useCallback } from 'react';

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';

import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import MoodIcon from '@material-ui/icons/Mood';

import { useStyles } from './styles';
import { DialogForm } from '../DialogForm';
import { DialogRemove } from '../DialogRemove';
import { ProductCardType } from '../../types';

export const ProductCard = ({
  product,
  handleChange,
  handleRemove,
}) => {
  const classes = useStyles();
  const [viewOpen, setViewOpen] = useState(false);
  const [removeOpen, setRemoveOpen] = useState(false);

  const handleViewOpen = useCallback(() => {
    setViewOpen(true);
  }, []);

  const handleViewClose = useCallback(() => {
    setViewOpen(false);
  }, []);

  const handleSubmitRemove = useCallback((event) => {
    const productId = event.currentTarget.value;

    handleRemove(+productId);
    setRemoveOpen(false);
  }, [handleRemove]);

  const handleRemoveOpen = useCallback(() => {
    setRemoveOpen(true);
  }, []);

  const handleRemoveClose = useCallback(() => {
    setRemoveOpen(false);
  }, []);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image="https://source.unsplash.com/random"
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" gutterBottom>
          {product.name}
        </Typography>
        <Typography>
          {product.description}
          <br/>
          Quantity: {product.quantity}
          <br/>
          {`Size: ${product.width}x${product.height}cm`}
          <br/>
          {`Weight: ${product.weight}g`}
        </Typography>
      </CardContent>
      <CardActions>
      <Button
        size="small"
        color="primary"
        onClick={handleViewOpen}
      >
        View
      </Button>
      <DialogForm
        open={viewOpen}
        handleClose={handleViewClose}
        handleSubmit={handleChange}
        initialProduct={product}
      />
      <Button
        size="small"
        color="secondary"
        onClick={handleRemoveOpen}
      >
        Remove
      </Button>
      <DialogRemove
        open={removeOpen}
        handleClose={handleRemoveClose}
        handleSubmit={handleSubmitRemove}
        product={product}
      />
      <LocalGroceryStoreIcon color="primary" />
      <LocalOfferIcon color="primary" />
      <MoodIcon color="primary" />
    </CardActions>
  </Card>
  );
};

ProductCard.propTypes = ProductCardType;
