import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Datepik } from '../.';

const App = () => {
  const [date, setDate] = React.useState<Date>();
  return (
    <div>
      <Datepik value={date} onChange={setDate} />
      {date && date.toString()}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
