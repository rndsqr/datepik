import React from 'react';
import Select from './Select';

const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) =>
    (start + i * step).toString()
  );
const days = range(1, 31, 1);

type Props = {
  value: string;
  onChange: (newValue: string) => void;
  onBlur?: () => void;
};

const DaySelect = ({ value, onChange, onBlur }: Props) => (
  <Select
    values={days}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    className="date-pik-desktop-day"
  />
);

export default DaySelect;
