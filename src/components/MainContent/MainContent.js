import React, { useState, useCallback } from 'react';

import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, TextField, Typography } from '@material-ui/core';

import LayerIcon from '@material-ui/icons/Layers';
import PlayerCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { useStyles } from './styles';

const productsList = [1,2,3,4,5,6,7,8];

export const MainContent = () => {
  const classes = useStyles();
  const [products, setProducts] = useState(productsList);
  const [addOpen, setAddOpen] = useState(false);
  const [removeOpen, setRemoveOpen] = useState(false);

  const handleAddOpen = () => {
    setAddOpen(true);
  }

  const handleAddClose = () => {
    setAddOpen(false);
  }

  const handleRemove = useCallback((id) => {
    const newProductsList = products.filter(product => product !== id);
    setProducts(newProductsList);
    setRemoveOpen(false);
  }, [products]);

  const handleRemoveOpen = (event) => {
    console.log(event);
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
                <Dialog
                  open={addOpen}
                  onClose={handleAddClose}
                  aria-labelledby="form-dialog-title-add"
                >
                  <DialogTitle id="add-dialog-title">Add product</DialogTitle>
                  <DialogContent>
                    <DialogContentText>Add new product</DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Name"
                      type="text"
                      fullWidth
                    />
                    <TextField
                      margin="dense"
                      id="description"
                      label="Description"
                      type="text"
                      fullWidth
                      multiline
                    />
                    <TextField
                      margin="dense"
                      id="description"
                      label="Image Url"
                      type="text"
                      fullWidth
                    />
                    <TextField
                      margin="dense"
                      id="height"
                      label="Height"
                      type="number"
                    />
                    <TextField
                      margin="dense"
                      id="weight"
                      label="Weight"
                      type="number"
                    />
                    <br/>
                    <TextField
                      margin="dense"
                      id="quantity"
                      label="Quantity"
                      type="number"
                    />
                    <br/>
                    <TextField
                      margin="dense"
                      id="width"
                      label="Width"
                      type="number"
                    />
                    <Box width={1/5}>
                      <TextField
                        margin="dense"
                        id="color"
                        label="Color"
                        type="color"
                        fullWidth
                      />
                    </Box>
                    
                  </DialogContent>
                  <DialogActions>
                    <Button
                      size="small"
                      color="primary"
                      // onClick={}
                    >
                      Save
                    </Button>
                    <Button
                      size="small"
                      onClick={handleAddClose}
                      color="secondary"
                    >
                      Cancel
                    </Button>
                  </DialogActions>
                </Dialog>
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
            <Grid item key={product} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                    Product name
                  </Typography>
                  <Typography>
                    Product description
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View</Button>
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
                        onClick={() => handleRemove(product)}
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
                  <LayerIcon />
                  <PlayerCircleFilledIcon />
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}
