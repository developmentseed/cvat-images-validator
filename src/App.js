import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './style/MainStyle';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Main from './routes';
import amber from '@material-ui/core/colors/amber';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: red,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
