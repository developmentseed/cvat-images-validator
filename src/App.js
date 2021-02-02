import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

import Header from './components/Header';
import { fetchData } from './actions/fetchDataActions';
import Error from './components/Error';
import Login from './components/Login';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const styles = (theme) => ({
  progress: {
    display: 'block',
    margin: 'auto',
    marginTop: '20%',
    width: '100px',
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setValues(values) {
    this.props.dispatch(fetchData(values));
  }

  renderMainPage() {
    return (
      <div>
        <Header />
        <Route path="/project" component={Error} />
      </div>
    );
  }

  render() {
    const { classes, loading, is_login } = this.props;

    if (loading) {
      return <CircularProgress className={classes.progress} />;
    }

    return (
      <Router>
        {!is_login ? (
          <Route path="" component={Login} />
        ) : (
          this.renderMainPage()
        )}
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data.data,

  loading: state.ui.loading,
  is_login: state.user.is_login,
});
const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(App);
