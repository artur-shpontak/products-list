import React, { useState, useCallback } from 'react';

import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';

import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import MoodIcon from '@material-ui/icons/Mood';
import { useStyles } from './styles';
import { DialogForm } from '../DialogForm';
import { DialogRemove } from '../DialogRemove';
import { MainPost } from '../MainPost';

const product = {
  name: 'Product name',
  description: 'Product description',
  imageUrl: 'https://source.unsplash.com/random',
  height: '200',
  width: '200',
  quantity: '4',
  weight: '200',
}

const productsList = Array(8);

for (let i = 0; i < productsList.length; i++) {
  productsList[i] = {...product, id: i + 1};
}

export const MainContent = ({ setNewId }) => {
  const classes = useStyles();

  const [products, setProducts] = useState(productsList);
  const [addOpen, setAddOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [removeOpen, setRemoveOpen] = useState(false);

  const handleAddOpen = useCallback(() => {
    setAddOpen(true);
  }, []);

  const handleAddClose = useCallback(() => {
    setAddOpen(false);
  }, []);

  const handleAddProduct = useCallback((newProduct) => {
    setProducts([...products, { ...newProduct, id: setNewId()}]);
  }, [products, setNewId]);

  const handleViewOpen = useCallback(() => {
    setViewOpen(true);
  }, []);

  const handleViewClose = useCallback(() => {
    setViewOpen(false);
  }, []);

  //TODO correct work for this method(currently editing the last item from list, regardless of which one was selected)
  const handleChangeProduct = useCallback((changedProduct) => {
    const index = products.findIndex(item => item.id === changedProduct.id);

    products[index] = {...changedProduct};
  }, [products]);

  //TODO correct work for this method(currently removing only last item from list, regardless of which one was selected)
  const handleRemove = useCallback((event) => {
    const productId = event.currentTarget.value;
    const newProductsList = products.filter(product => product.id !== +productId);

    setProducts([...newProductsList]);
    setRemoveOpen(false);
  }, [products]);

  const handleRemoveOpen = useCallback(() => {
    setRemoveOpen(true);
  }, []);

  const handleRemoveClose = useCallback(() => {
    setRemoveOpen(false);
  }, []);

  return (
    <main>
      <MainPost />

      <div className={classes.mainContent}>
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Products list
          </Typography>
          <div className={classes.mainButtons}>
            <Grid container spacing={3} justify="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddOpen}
                >
                  Add product
                </Button>
                <DialogForm
                  open={addOpen}
                  handleClose={handleAddClose}
                  handleSubmit={handleAddProduct}
                  isNewItem={true}
                />
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">Learn More</Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
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
                    handleSubmit={handleChangeProduct}
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
                    handleSubmit={handleRemove}
                    product={product}
                  />
                  <LocalGroceryStoreIcon color="primary" />
                  <LocalOfferIcon color="primary" />
                  <MoodIcon color="primary" />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
