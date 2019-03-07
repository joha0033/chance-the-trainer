import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import DemoButton from './DemoButton';
import { Link } from 'react-router-dom'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    demoButton: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    nameSmall: {
      display: 'none',
      [theme.breakpoints.down('xs')]: {
        display: 'block',
        textAlign: 'center'
      },
    },
    nameLarge: {
      display: 'block',
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },
    },
    link: { 
      textDecoration: 'none', 
      color: 'white' 
    },
  });

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
            <Grid container spacing={0}>
           
            
                <Grid item xs={12}>
                <Link to='/' className={classes.link}>
                    <Typography variant="h4" color="inherit" className={classes.nameLarge}>
                        Chance The Trainer
                    </Typography>
                    <Typography variant="subtitle2" color="inherit" className={classes.nameSmall}>
                        Chance The Trainer sm
                    </Typography>
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" color="inherit" className={classes.nameLarge}>
                        by: ajDevs
                    </Typography>
                    <Typography variant="caption" color="inherit" className={classes.nameSmall}>
                        by: ajDevs sm
                    </Typography>
                </Grid>
                
            </Grid>
            {/* <div className={classes.demoButton}>
              <DemoButton />
            </ div> */}
           
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);