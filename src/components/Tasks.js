import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Container, Grid, Paper } from '@material-ui/core';
import styles from '../style/MainStyle';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderTask() {}
  render() {
    const { classes } = this.props;
    return (
      <Container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(Tasks);
