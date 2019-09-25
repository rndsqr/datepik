import React, { useState, useEffect } from 'react';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import { isValid } from 'date-fns';
import '@reach/combobox/styles.css';

type DatepikProps = {
  value?: Date;
  onChange: (value: Date) => void;
};

const useMatch = (term: string, array: string[]) => {
  return term.trim() === ""
    ? array.slice(0, 5)
    : array.filter(month => month.toLowerCase().startsWith(term.toLowerCase())).slice(0, 5);
};

const range = (start: number, stop: number, step: number) => Array.from({ length: (stop - start) / step + 1}, (_, i) => (start + (i * step)).toString());

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const days = range(1, 31, 1);

const currentYear = (new Date()).getFullYear();
const years = range(currentYear, currentYear - 100, -1);

export const Datepik = ({ value, onChange }: DatepikProps) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState(false);

  // react to new values passed in
  useEffect(() => {
    console.log('new value', value);
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
      console.log('setting new value', new Date(Number.parseInt(year, 10), months.findIndex(m => m === month), Number.parseInt(day, 10)));
      console.log('raw values', year, month, months.findIndex(m => m === month), day);
      onChange(new Date(Number.parseInt(year, 10), months.findIndex(m => m === month), Number.parseInt(day, 10)));
      if (error) {
        setError(false);
      }
    } else {
      setError(true);
    }
  }, [day, month, year]);

  const filteredMonths = useMatch(month, months);
  const filteredDays = useMatch(day, days);
  const filteredYears = useMatch(year, years);

  return (
    <div>
      <Combobox onSelect={value => setMonth(value)} value={month} style={{ display: "inline" }} openOnFocus>
        <ComboboxInput aria-label="Month" placeholder="Month" onChange={e => setMonth((e.target as HTMLInputElement).value)} style={{ display: "inline" }} />
        <ComboboxPopover>
          <ComboboxList>
            {filteredMonths && filteredMonths.map((month) => (
              <ComboboxOption value={month.toString()} key={month} />
            ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
      <Combobox onSelect={value => setDay(value)} value={day} style={{ display: "inline" }} openOnFocus>
        <ComboboxInput aria-label="Day" placeholder="Day" onChange={e => setDay((e.target as HTMLInputElement).value)} style={{ display: "inline" }} />
        <ComboboxPopover>
          <ComboboxList>
            {filteredDays && filteredDays.map(day => (
              <ComboboxOption value={day} key={day} />
            ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
      <Combobox onSelect={value => setYear(value)} value={year} style={{ display: "inline" }} openOnFocus>
        <ComboboxInput aria-label="Year" placeholder="Year" onChange={e => setYear((e.target as HTMLInputElement).value)} style={{ display: "inline" }} />
        <ComboboxPopover>
          <ComboboxList>
            {filteredYears && filteredYears.map((year) => (
              <ComboboxOption value={year} key={year} />
            ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
      <br />
      {error && <span>Error</span>}
    </div> 
  );
};

export default Datepik;
