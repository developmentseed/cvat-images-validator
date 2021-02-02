import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { SportsEsports } from '@material-ui/icons';
import styles from '../style/MainStyle';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <SportsEsports />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              CVAT images validator
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});

export default compose(connect(mapStateToProps), withStyles(styles))(Header);
