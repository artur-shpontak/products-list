import React, { useState, useCallback } from 'react';

import { Button, Container, Grid, Typography } from '@material-ui/core';

import { useStyles } from './styles';
import { DialogForm } from '../DialogForm';
import { MainPost } from '../MainPost';
import { ProductCard } from '../ProductCard';

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

  const handleAddOpen = useCallback(() => {
    setAddOpen(true);
  }, []);

  const handleAddClose = useCallback(() => {
    setAddOpen(false);
  }, []);

  const handleAddProduct = useCallback((newProduct) => {
    setProducts([...products, { ...newProduct, id: setNewId()}]);
  }, [products, setNewId]);

  //TODO correct work for this method(currently edit selected product, but doesn't call re-render for the card)
  const handleChangeProduct = useCallback((changedProduct) => {
    const index = products.findIndex(item => item.id === changedProduct.id);

    products[index] = {...changedProduct};
  }, [products]);

  const handleRemoveProduct = useCallback((removableProductId) => {
    const newProductsList = products.filter(product => product.id !== removableProductId);

    setProducts([...newProductsList]);
  }, [products]);

  return (
    <main>
      <MainPost />

      {/* TODO create ProductsList component */}
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
              <ProductCard
                product={product}
                handleChange={handleChangeProduct}
                handleRemove={handleRemoveProduct}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
