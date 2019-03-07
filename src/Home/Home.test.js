import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {render, fireEvent, cleanup, text} from 'react-testing-library';
// import router
import Home from './Home';
import HowToList from './HowToList'
import GetStartedButton from './GetStartedButton'

/**
 * BASIC TESTS
 * 
 * Renders, Snapshots
 * 
 * START
 */

 /**
  * RENDERS START
  */
it('renders Home component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders get started button without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GetStartedButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders how to list without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HowToList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
 /**
  * RENDERS END
  */


/**
 * SNAPSHOTS START
 */
it('renders entire Home component correctly', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// HOW TO LIST
it('renders how to list correctly', () => {
  const tree = renderer
    .create(<HowToList />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// GET STARTED BUTTON
it('renders get started button correctly', () => {
  const tree = renderer
    .create(<GetStartedButton />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
/**
 * SNAPSHOTS END
 * 
 * BASIC TESTS END
 */


 /**
  * DOM && EVENTS
  * 
  * START
  */
 afterEach(cleanup);

 it('Home display elevation variable changes with screen width', () => {
   const propXS = {
    width: 'xs'
   }
   const propsSM = {
    width: 'sm'
   }
  const componentLarge = renderer
    .create(<Home  {...propsSM} />)
    .toJSON()
  const componentSmall = renderer
    .create(<Home  {...propXS} />)
    .toJSON()
    
  expect(componentSmall.children[0].props.className.includes('MuiPaper-elevation0-224')).toBeTruthy();
  expect(componentLarge.children[0].props.className.includes('MuiPaper-elevation5-229')).toBeTruthy();

});
 /**
  * END
  * 
  * DOM && EVENTS
  */
