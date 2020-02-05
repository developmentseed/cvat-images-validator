import React from 'react';
import ReactDOM from 'react-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = {
  input: {
    color: 'white'
  }
};

class Copy extends React.Component {
  state = {
    value: '',
    copied: false
  };

  render() {
    const { classes } = this.props;

    return (
      <div style={{ width: '100%' }}>
        <CopyToClipboard text={this.props.imgPath} onCopy={() => this.setState({ copied: true })}>
          <TextField
            inputProps={{
              className: classes.input
            }}
            value={this.props.imgPath}
          />
        </CopyToClipboard>
        {/* {this.state.copied ? (
          <Typography paragraph color="textSecondary">
            Copied.
          </Typography>
        ) : null} */}
      </div>
    );
  }
}
export default withStyles(styles)(Copy);
