import * as React from 'react';
import { render } from '@testing-library/react';
import Datepik from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const { container } = render(<Datepik value={new Date()} onChange={() => {}} />);
    expect(container).toBeDefined();
  });
});
