import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 450,
        backgroundColor: theme.palette.background.paper,
      },
    button: {
        color: 'white',
    },
    icon:{
        paddingRight: 10
    }
  
});

const handleClick = (setIsDemoDisplayed) => {
    return setIsDemoDisplayed()
}


const DemoButton = (props) => {
  const { classes, setIsDemoDisplayed } = props;
  return (
    <div className='ProgressBar'>
        <div >
            <Button 
                aria-label="Demo" 
                className={classes.button}
                onClick={() => handleClick(setIsDemoDisplayed)}
                // style={{padding: progressUsed * 1}}
            >
            <i className={"material-icons " + classes.icon}>
            burst_mode
            </i>
                demo
            </Button>
        </div>
      </div>
  );
}

DemoButton.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(DemoButton)