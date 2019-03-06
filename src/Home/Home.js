import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HowToList from './HowToList'
import GetStartedButton from './GetStartedButton';
import withWidth from '@material-ui/core/withWidth';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    marginBottom: 30,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: 'center',
  }
});

function Home(props) {
  const { classes, width } = props;
  const elevation = width === 'xs' ? 0 : 5
  
  return (
        <Paper  className={classes.root} elevation={elevation}>
          <Typography component="h4" >
            <HowToList />
            <GetStartedButton />
          </Typography>
        </Paper>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withWidth()(Home));