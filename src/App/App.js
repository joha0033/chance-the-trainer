import React from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SimpleAppBar from '../Navbar/Navbar';
import theme from '../theme'
import Home from '../Home/Home'
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Slideshow from '../Slideshow/Slideshow'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.green,
  },
  App: {
    alignItems: 'center'
  },
  control: {
    // padding: theme.spacing.unit * 2,
  },
});

const App = () => {
  return (
    <Router>
       <MuiThemeProvider theme={theme}>
        <div className="App">
        <SimpleAppBar/>
          <header className="App-header">
          <br></br>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Slideshow' component={Slideshow}/>
          </header>
        </div>
      </MuiThemeProvider>
    </Router>
    );
}

export default withStyles(styles)(App);
