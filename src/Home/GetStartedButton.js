import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});



function GetStartedButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
        Get Started
      </Button>

    </div>
  );
}

GetStartedButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GetStartedButton);