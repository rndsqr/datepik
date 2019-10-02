import React from 'react';
import Select from './Select';

const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) =>
    (start + i * step).toString()
  );
const currentYear = new Date().getFullYear();
const years = range(currentYear, currentYear - 100, -1);

type Props = {
  value: string;
  onChange: (newValue: string) => void;
  onBlur?: () => void;
};

const YearSelect = ({ value, onChange, onBlur }: Props) => (
  <Select
    values={years}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    className="date-pik-desktop-year"
  />
);

export default YearSelect;
