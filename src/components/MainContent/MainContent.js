import React, { useState, useCallback } from 'react';

import { Button, Card, CardActions, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, Typography } from '@material-ui/core';

import LayerIcon from '@material-ui/icons/Layers';
import PlayerCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(6),
  },
  cardMedia: {
    paddingTop: "55%"
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4),
  }
}));

const productsList = [1,2,3,4,5,6,7,8];

export const MainContent = () => {
  const classes = useStyles();
  const [products, setProducts] = useState(productsList);
  const [open, setOpen] = useState(false);

  const handleRemove = useCallback((id) => {
    const newProductsList = products.filter(product => product !== id);

    setProducts(newProductsList);
    setOpen(false);
  }, [products]);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
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
                <Button variant="contained" color="primary">Start Now</Button>
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
                    onClick={handleClickOpen}
                    >
                    Remove
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
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
                        onClick={handleClose}
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
