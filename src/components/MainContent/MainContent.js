import React, { useState, useCallback } from 'react';

import { Button, Card, CardActions, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, Typography } from '@material-ui/core';

import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import MoodIcon from '@material-ui/icons/Mood';
import { useStyles } from './styles';
import { DialogForm } from '../DialogForm/DialogForm';
// const { v4: uuidv4 } = require('uuid');

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

  const handleAddOpen = () => {
    setAddOpen(true);
  }

  const handleAddClose = () => {
    setAddOpen(false);
  }

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: setNewId()}]);
  }

  const handleViewOpen = () => {
    setViewOpen(true);
  }

  const handleViewClose = () => {
    setViewOpen(false);
  }

  const handleChangeProduct = (changedProduct) => {
    console.log(changedProduct);
    const index = products.findIndex(item => item.id === changedProduct.id);

    products[index] = {...changedProduct};
  }

  //TODO function to remove product by id
  const handleRemoveProduct = useCallback((productId) => {
    const newProductsList = products.filter(product => product.id !== productId);

    console.log(productId, newProductsList);

    // setProducts(newProductsList);
    handleRemoveClose();
  }, [products]);

  const handleRemoveOpen = () => {
    setRemoveOpen(true);
  }

  const handleRemoveClose = () => {
    setRemoveOpen(false);
  }

  return (
    <main>
      <Paper
        className={classes.mainFeaturesPost}
        style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
      >
        <Container fixed>
          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturesPostContent}>
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  Products list
                </Typography>
                <Typography
                  component="h5"
                  color="inherit"
                  paragraph
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
                <Button variant="contained" color="secondary">Learn more</Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>

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
                  <Dialog
                    open={removeOpen}
                    onClose={handleRemoveClose}
                    aria-labelledby="form-dialog-title"
                  >
                    <DialogTitle id="remove-dialog-title">Remove product</DialogTitle>
                    <DialogContent>
                      <DialogContentText>Are you sure you want to remove the product?</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        size="small"
                        color="secondary"
                        onClick={() => handleRemoveProduct(product.id)}
                      >
                        Remove
                      </Button>
                      <Button
                        size="small"
                        onClick={handleRemoveClose}
                        color="primary"
                      >
                        Cancel
                      </Button>
                    </DialogActions>
                  </Dialog>
                  {/* <LayerIcon />
                  <PlayerCircleFilledIcon /> */}
                  <LocalGroceryStoreIcon />
                  <LocalOfferIcon />
                  <MoodIcon />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
