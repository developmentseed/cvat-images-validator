import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import { connect } from 'react-redux';
import { compose } from 'recompose';
import {
  Typography,
  CardMedia,
  CardContent,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
} from '@material-ui/core';
import { Send } from '@material-ui/icons';
import styles from '../style/MainStyle';
import SelectUser from './SelectUser';

class TasksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, url, id, name, segments } = this.props;

    const urlJob = (job) =>
      `${job.url.split('api')[0]}/tasks/${id}/jobs/${job.id}`;
    return (
      <Card>
        <CardMedia
          component="img"
          alt={`${name}`}
          height="140"
          image={`${url}/data?type=preview`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <div>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center" className={classes.tableCell}>
                    jobs
                  </TableCell>
                  <TableCell align="right" className={classes.tableCell}>
                    start
                  </TableCell>
                  <TableCell align="right" className={classes.tableCell}>
                    stop
                  </TableCell>
                  <TableCell align="right" className={classes.tableCell}>
                    assignee
                  </TableCell>
                  <TableCell align="right" className={classes.tableCell}>
                    reviewer
                  </TableCell>
                  <TableCell
                    align="right"
                    className={classes.tableCell}
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {segments.map((row, i) => (
                  <TableRow key={row.jobs[0].id}>
                    <TableCell align="center" className={classes.tableCell}>
                      <a
                        href={urlJob(row.jobs[0])}
                        target="__blank"
                      >{`Job #${row.jobs[0].id}`}</a>
                    </TableCell>
                    <TableCell align="right" className={classes.tableCell}>
                      {row.start_frame}
                    </TableCell>
                    <TableCell align="right" className={classes.tableCell}>
                      {row.stop_frame}
                    </TableCell>
                    <TableCell align="right" className={classes.tableCell}>
                      {row.jobs[0].assignee}
                    </TableCell>
                    <TableCell align="right" className={classes.tableCell}>
                      <SelectUser
                        idJob={row.jobs[0].id}
                        reviewer={row.jobs[0].reviewer}
                      />
                    </TableCell>
                    <TableCell align="right" className={classes.tableCell}>
                      <IconButton
                        aria-label="delete"
                        className={classes.margin}
                      >
                        <Send fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(TasksContainer);
