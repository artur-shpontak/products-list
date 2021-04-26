import React, { useState, useCallback } from 'react';

import { Button, Container, Grid, Typography } from '@material-ui/core';

import { useStyles } from './styles';
import { DialogForm } from '../DialogForm';
import { MainPost } from '../MainPost';
import { ProductCard } from '../ProductCard';

const product = {
  name: 'Product name',
  description: 'Product description',
  imageUrl: 'https://nooby-games.ru/wp-content/uploads/2018/12/keyboard-338505_1920.jpg',
  height: '200',
  width: '200',
  quantity: '4',
  weight: '200',
}

const productsList = Array(8);

for (let i = 0; i < productsList.length; i++) {
  productsList[i] = {...product, id: i + 1};
}

productsList[0].name = 'Average product';
productsList[0].description = 'There is no description';
productsList[0].imageUrl = 'https://npshopping.com/images/posts/5fe4cd7cbf59d918472587.jpeg';
productsList[0].quantity = '3';
productsList[0].height = '50';
productsList[0].width = '100';
productsList[0].weight = '100';

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

  const sortByName = useCallback(() => {
    setProducts([...products]
      .sort((previous, current) => previous.name.localeCompare(current.name)));
  }, [products]);

  const sortByQuantity = useCallback(() => {
    setProducts([...products]
      .sort((previous, current) => current.quantity - previous.quantity));
  }, [products]);

  const handleChangeProduct = useCallback((changedProduct) => {
    setProducts(products
      .map(product => product.id === changedProduct.id
        ? changedProduct
        : product
      ),
    );
  }, [products]);

  const handleRemoveProduct = useCallback((removableProductId) => {
    const newProductsList = products.filter(product => product.id !== removableProductId);

    setProducts([...newProductsList]);
  }, [products]);

  return (
    <main>
      <MainPost />

      {/* TODO create component MainButtons */}
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
          <Grid
            container
            spacing={3}
            justify="center"
            alignItems="center"
          >
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
              <Button
                variant="outlined"
                color="primary"
                onClick={sortByName}
              >
                Sort By Name
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={sortByQuantity}
              >
                Sort By Quantity
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* TODO create component ProductCards */}
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
