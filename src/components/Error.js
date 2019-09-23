import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    display: 'block',
    margin: 'auto',
    padding: '20px'
  }
};

class Error extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            {`Error loading the DumpXML file , Load the following attributes on the query:`}
          </Typography>
          <Typography component="p">{`xmlDump=<Public url for the dump file>`}</Typography>
          <Typography component="p">{`startImgId=<Index of image to start >`}</Typography>
          <Typography component="p">{`stopImgId=<Index of image of the last image >`}</Typography>
          <Typography component="p">
            {`columns=<Number of columns to display the images >`}
          </Typography>

          <Typography>
            {`e.g: "<host>?xmlDump=https://ds.s3.amazonaws.com/test.xml&startImgId=1&stopImgId=1000&columns=3"`}
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Error);
