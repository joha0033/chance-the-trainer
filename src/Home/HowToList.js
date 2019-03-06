import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 450,
    backgroundColor: theme.palette.background.paper,
  },
});

function ListItemLink(props) {
  return <ListItem  {...props} />;
}

function HowToList(props) {
  const { classes } = props;

  return (
    <div className={classes.root} >
      <List component="nav">
        <h3>How this works</h3>
        <ListItem>
          <ListItemText primary=" This is an app that helps with Public Speaking." />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Its a random slide show generator" />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="3 slides (photos) // 30 seconds a piece" />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Start a speech inspired by the photo displayed" />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Relate your points from previous slide with the next" />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Tie your points together with the last slide" />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Click the get started button" />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Once directed to Slideshow, press the play button" />
        </ListItemLink>
      </List>
    </div>
  );
}

HowToList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HowToList);