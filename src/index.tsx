import React, { useState, useEffect } from 'react';
import { isValid } from 'date-fns';
import MonthSelect from './MonthSelect';
import DaySelect from './DaySelect';
import YearSelect from './YearSelect';

type DatepikProps = {
  value?: Date;
  onChange: (value: Date) => void;
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


export const Datepik = ({ value, onChange }: DatepikProps) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState(false);

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
    if (!Number.parseInt(year) || !Number.parseInt(day) || months.findIndex(m => m === month) === -1) {
      setError(true);
      return;
    }

    if (isValid(new Date(Number.parseInt(year, 10), months.findIndex(m => m === month), Number.parseInt(day, 10)))) {
      onChange(new Date(Number.parseInt(year, 10), months.findIndex(m => m === month), Number.parseInt(day, 10)));
      if (error) {
        setError(false);
      }
    } else {
      setError(true);
    }
  }, [day, month, year]);

  return (
    <div>
      <MonthSelect value={month} onChange={setMonth} />
      <DaySelect value={day} onChange={setDay} />
      <YearSelect value={year} onChange={setYear} />
      <br />
      {error && <span>Error</span>}
    </div> 
  );
};

export default Datepik;
