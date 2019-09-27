import React, { useState, useEffect } from 'react';
import { isValid, getDaysInMonth } from 'date-fns';
import MonthSelect from './MonthSelect';
import DaySelect from './DaySelect';
import YearSelect from './YearSelect';

type Props = {
  value?: Date;
  onChange: (value: Date) => void;
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const DesktopView = ({ value, onChange }: Props) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const [error, setError] = useState<string>();

  // react to new values passed in
  useEffect(() => {
    if (value) {
      setDay(value.getDate().toString());
      setMonth(months[value.getMonth()]);
      setYear(value.getFullYear().toString());
    }
  }, [value]);

  // react to input changes
  useEffect(() => {
    // parse the inputs into numbers
    const parsedYear = Number.parseInt(year, 10);
    const parsedDay = Number.parseInt(day, 10);
    const parsedMonth = months.findIndex(m => m === month);

    // check if the inputs are at least valid numbers
    if (!parsedYear || !parsedDay || parsedMonth === -1) {
      setError('Invalid input');
      return;
    }

    const newDate = new Date(parsedYear, parsedMonth, parsedDay);

    // check if the date is valid
    if (!isValid(newDate)) {
      setError('Invalid date');
      return;
    };

    // check if we have an allowable number of days in the current month
    if (parsedDay > getDaysInMonth(new Date(parsedYear, parsedMonth))) {
      setError('Invalid day for given month/year');
      return;
    }

    // call our callback
    onChange(newDate);
    if (error) {
      setError(undefined);
    }
  }, [day, month, year]);
  
  return (
    <div>
      <MonthSelect value={month} onChange={setMonth} />
      <DaySelect value={day} onChange={setDay} />
      <YearSelect value={year} onChange={setYear} />
      {error && <div>{error}</div>}
    </div>
  );
};

export default DesktopView;