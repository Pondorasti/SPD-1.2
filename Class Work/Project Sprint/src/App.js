import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import TMDrawer from './TMDrawer'
import TMAppBar from './TMAppBar'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <TMAppBar />
      <TMDrawer />

      <main className={classes.content}>
        <Toolbar />
        <Typography paragraph>
          Hello
        </Typography>
      </main>
    </div>
  );
}

export default App;
