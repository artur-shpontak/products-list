import React from 'react';

import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { useStyles } from './styles';

export const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>Products list</Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">Log in</Button>
          </Box>
          <Button color="secondary" variant="contained">Sign up</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
