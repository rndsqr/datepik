import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Datepik } from '../.';

const App = () => {
  return (
    <div>
      <Datepik />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
