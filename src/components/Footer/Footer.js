import React, { useState, useCallback } from 'react';

import { BottomNavigation, BottomNavigationAction, Typography } from '@material-ui/core';

import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { useStyles } from './styles';

export const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = useState("recents");

  const handleChange = useCallback((event, newValue) => {
    console.log(newValue);

    setValue(newValue);
  }, []);

  return (
    <footer>
      <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={<FolderIcon />}
        />
      </BottomNavigation>
      <Typography
        align="center"
        color="textSecondary"
        component="p"
        subtitle={1}
      >
        Products list
      </Typography>
    </footer>
  );
}
