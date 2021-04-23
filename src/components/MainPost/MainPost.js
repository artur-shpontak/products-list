import React from 'react';

import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import { useStyles } from './styles';

export const MainPost = () => {
  const classes = useStyles();

  return (
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
  );
};
