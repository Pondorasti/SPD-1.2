import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid } from "@material-ui/core"
import TMTheme from "./TMTheme"

import TMDrawer from './TMDrawer'
import TMAppBar from './TMAppBar'
import TMCard from './TMCard'
import DummyData from './DummyData'

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
    <ThemeProvider theme={TMTheme}>
      <div className={classes.root}>
        <CssBaseline />

        <TMAppBar />
        <TMDrawer />

        <main className={classes.content}>
          <Toolbar />
          <Grid
            container
            spacing={2}
            justify="center"
            classes={{ root: classes.gridContainer }}
          >
            {DummyData.map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                classes={{ root: classes.gridItem }}
              >
                <TMCard
                  username={item.username}
                  shorthandUsername={item.shorthandUsername}
                  bannerURL={item.bannerURL}
                  game={item.game}
                  description={item.description}
                />
              </Grid>
            ))}
          </Grid>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
