import React from 'react';
import './App.css';

import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Paper, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import PlayerCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
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
  }
}));

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// firebase.initializeApp({})

const cards = [1,2,3,4,5,6,7,8];

function App() {
  const classes = useStyles();
  return (
    <>
      <div className="App">
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
      </div>

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
              color="TextPrimary"
              gutterBottom=""
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
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
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
                    <Button size="small" color="primary">Edit</Button>
                    <LayerIcon />
                    <PlayerCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;
