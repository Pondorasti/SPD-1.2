import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import CreateTeamoDialog from './CreateTeamoDialog'

import GroupIcon from '@material-ui/icons/Group';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import InfoIcon from '@material-ui/icons/Info';
import RateReviewIcon from '@material-ui/icons/RateReview';
import CreateIcon from '@material-ui/icons/Create';

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
  const [openCreateLobby, setCreateLobby] = React.useState(false)

  function handleCreateTeamoOpen() {
    setCreateLobby(true)
  }

  function handleCreateLobbyClose() {
    setCreateLobby(false)
  }

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


            <ListItem button onClick={handleCreateTeamoOpen}>
              <ListItemIcon><CreateIcon /></ListItemIcon>
              <ListItemText primary="Create Teamo" />
            </ListItem>
            <CreateTeamoDialog open={openCreateLobby} onClose={handleCreateLobbyClose} />

            <ListItem button>
              <ListItemIcon><FolderSharedIcon /></ListItemIcon>
              <ListItemText primary="Bookmarked Teams" />
            </ListItem>
          </List>
          <Divider />
          <List>
          <ListItem button>
              <ListItemIcon><RateReviewIcon /></ListItemIcon>
              <ListItemText primary="Send Feedback" />
            </ListItem>
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