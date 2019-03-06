import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HowToList from './HowToList'
import GetStartedButton from './GetStartedButton';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    marginBottom: 30,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: 'center'
  }
});

function Home(props) {
  const { classes } = props;
  return (
    <div>
      <Paper  className={classes.root} elevation={5}>
        <Typography variant="h5" component="h4" >
          <HowToList />
          <GetStartedButton />
        </Typography>
      </Paper>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);