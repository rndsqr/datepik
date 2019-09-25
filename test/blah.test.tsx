import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Datepik from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Datepik value={new Date()} onChange={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
