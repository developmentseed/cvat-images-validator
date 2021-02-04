import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/styles';
import { Container, Grid } from '@material-ui/core';
import styles from '../style/MainStyle';

import TaskCard from './TaskCard';

class TasksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes, tasks, users } = this.props;
    if (tasks.length === 0) return null;

    return (
      <Grid container spacing={3}>
        {tasks.map((task) => (
          <Grid item xs={6} md={6} lg={4} key={task.id}>
            <TaskCard users={users} {...task} />
          </Grid>
        ))}
      </Grid>
    );
  }
}
const mapStateToProps = (state) => ({
  tasks: state.data.tasks,
  users: state.data.users,
});
const mapDispatchToProps = {};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(TasksContainer);
