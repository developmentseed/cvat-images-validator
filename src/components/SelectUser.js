import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Select, MenuItem } from '@material-ui/core';
import styles from '../style/MainStyle';

class SelectUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, idJob, users, revieewd } = this.props;

    return (
      <div className={classes.formcontrol}>
        <Select
          className={classes.select}
          // value={userSelected}
          // onChange={handleChange}
        >
          {users.map((user) => (
            <MenuItem key={user.id} value={user.id}>
              {user.username}
            </MenuItem>
          ))}
        </Select>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.data.users,
});
const mapDispatchToProps = {};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(SelectUser);
