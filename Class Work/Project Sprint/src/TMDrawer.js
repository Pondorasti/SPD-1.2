import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import GroupIcon from '@material-ui/icons/Group';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import InfoIcon from '@material-ui/icons/Info';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));

function TMDrawer() {
  const classes = useStyles();

  return (
    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <ListItemIcon><GroupIcon /></ListItemIcon>
              <ListItemText primary="Friends List" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><FolderSharedIcon /></ListItemIcon>
              <ListItemText primary="Bookmarked Teams" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon><ContactSupportIcon /></ListItemIcon>
              <ListItemText primary="How it works?" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText primary="About us" />
            </ListItem>
          </List>
        </div>
      </Drawer>
  )
}

export default TMDrawer