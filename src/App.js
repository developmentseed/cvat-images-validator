import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import queryString from 'query-string';
import { withStyles } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import './reset.css';
import './App.css';
import Header from './components/Header';
import { fetchData } from "./actions/fetchDataActions";
import Images from './components/Images';

const styles = {
  progress: {
    display: "block",
    margin: "auto",
    marginTop: "20%",
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
    this.props.dispatch(
      fetchData(values)
    );
  }

  render() {
    const { classes, data, loading, error } = this.props;
    const { images, segments, taskId, xmlDump, startImgId, stopImgId, columns } = data

    /**
    * Loading
    */
    if (loading) {
      return <CircularProgress className={classes.progress} />;
    }

    /**
     * In case of error requesing
     */
    if (error) {
      return (<div>
        <span>
          {`Load the attributes "<host>?xmlDump=<url>&startImgId=1&stopImgId=1000&columns=3" on the URL`}
        </span>
      </div>);
    }

    return (
      <div class="wrapper">
        <Header />
        <main>
          <Images data={data} />
        </main>
      </div>
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
