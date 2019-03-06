import React, { useState } from 'react';
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
        width: '160px'
    },
    icon:{
        paddingRight: 10
    }
  
});




const DemoButton = (props) => {
    const { classes } = props;
    const [isDemoDisplayed, setIsDemoDisplayed] = useState(false)

    const handleClick = () => {
        setIsDemoDisplayed(!isDemoDisplayed)
    }

    return (
        <div className='ProgressBar'>
            <div >
                <label>
                    <Button 
                        aria-label="Demo" 
                        className={classes.button}
                        onClick={() => handleClick()}
                    >
                        <i className={"material-icons " + classes.icon}>
                            burst_mode
                        </i>
                        {isDemoDisplayed ? 'Hide Demo' : 'Show Demo'}
                    </Button>
                    
                </label>
                
            </div>
        </div>
    );
}

DemoButton.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(DemoButton)