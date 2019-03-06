import React from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SimpleAppBar from './Navbar';
import theme from './theme'
import Home from './Home'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    // backgroundColor: theme.palette.primary.green,
  },
  paper: {
    // maxWidth: 500,
  },
  control: {
    // padding: theme.spacing.unit * 2,
  },
});

const App = () => {
  return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
        <SimpleAppBar/>
          <header className="App-header">
          <br></br>
            <Home />
          </header>
        </div>
      </MuiThemeProvider>
      
    );
}

export default withStyles(styles)(App);
