import React, { useState, useEffect } from 'react';
import { isValid, getDaysInMonth } from 'date-fns';
import MonthSelect from './MonthSelect';
import DaySelect from './DaySelect';
import YearSelect from './YearSelect';

type Props = {
  value?: Date;
  onChange: (value: Date) => void;
  onError?: (error: string) => void;
};

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const DesktopView = ({ value, onChange, onError }: Props) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

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
      onError && onError('Invalid input');
      return;
    }

    const newDate = new Date(parsedYear, parsedMonth, parsedDay);

    // check if the date is valid
    if (!isValid(newDate)) {
      onError && onError('Invalid date');
      return;
    }

    // check if we have an allowable number of days in the current month
    if (parsedDay > getDaysInMonth(new Date(parsedYear, parsedMonth))) {
      onError && onError('Invalid day for given month/year');
      return;
    }

    // call our callback
    onChange(newDate);
  }, [day, month, year]);

  return (
    <div className="date-pik-desktop">
      <MonthSelect value={month} onChange={setMonth} />
      <DaySelect value={day} onChange={setDay} />
      <YearSelect value={year} onChange={setYear} />
    </div>
  );
};

export default DesktopView;
