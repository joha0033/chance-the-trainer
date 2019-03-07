import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import {render, fireEvent, cleanup, text} from 'react-testing-library';
import Navbar from './Navbar';
import DemoButton from './DemoButton'

/**
 * RENDER + SNAPSHOT TESTS
 * 
 * START
 */

/**
* RENDERS START
*/
//NAVBAR 
it('renders Navbar component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

// DEMO BUTTON
it('renders demo button without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
/**
* RENDERS END
*/


/**
 * SNAPSHOTS START
 */
// NAVBAR
it('renders Navbar component correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// DEMO BUTTON
it('renders demo button correctly', () => {
  const tree = renderer
    .create(<DemoButton />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
/**
 * SNAPSHOTS END
 */

 /**
  * END
  * 
  * RENDER + SNAPSHOT TESTS 
  */



 /**
  * DOM && EVENTS
  * 
  * START
  */
//  afterEach(cleanup);

//  it('Demo button text toggles "Hide Demo" to "Show Demo" on click', () => {
//   const {queryByText, getByText} = render(
//     <DemoButton  />,
//   );

//   expect(queryByText('Show Demo')).toBeTruthy();

//   fireEvent.click(getByText('Show Demo'));

//   expect(queryByText('Hide Demo')).toBeTruthy();
// });
 /**
  * END
  * 
  * DOM && EVENTS
  */