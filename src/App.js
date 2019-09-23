import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { withStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Header from './components/Header';
import { fetchData } from './actions/fetchDataActions';
import Images from './components/Images';
import Error from './components/Error';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';

const styles = {
  progress: {
    display: 'block',
    margin: 'auto',
    marginTop: '20%',
    width: '100px'
  }
};
class App extends Component {
  constructor(props) {
    super(props);
    this.setValues = this.setValues.bind(this);
    const values = queryString.parse(window.location.href.split('?')[1]);
    this.setValues(values);
  }

  setValues(values) {
    this.props.dispatch(fetchData(values));
  }

  render() {
    const { classes, data, loading, error } = this.props;

    /**
     * Loading
     */
    if (loading) {
      return <CircularProgress className={classes.progress} />;
    }

    return (
      <CssBaseline>
        <div class="wrapper">
          <Header />
          <main>{error ? <Error data={data} /> : <Images data={data} />}</main>
        </div>
      </CssBaseline>
    );
  }
}

const mapStateToProps = state => ({
  classes: PropTypes.object.isRequired,
  data: state.data.data,
  loading: state.data.loading,
  error: state.data.error
});

export default connect(mapStateToProps)(withStyles(styles)(App));
