import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DemoButton from './DemoButton';

const styles = theme => ({
    root: {
        flexGrow: 1,
    }
  });

function SimpleAppBar(props) {
  const { classes, setIsDemoDisplayed } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Typography variant="h4" color="inherit">
                        Chance The Trainer
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" color="inherit">
                        by: ajDevs
                    </Typography>
                </Grid>
            </Grid>
            <DemoButton 
              setIsDemoDisplayed={setIsDemoDisplayed}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);