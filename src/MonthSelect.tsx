import React from 'react';
import Select from './Select';

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

type Props = {
  value: string;
  onChange: (newValue: string) => void;
};

const MonthSelect = ({ value, onChange }: Props) => (
  <Select
    values={months}
    value={value}
    onChange={onChange}
    className="date-pik-desktop-month"
  />
);

export default MonthSelect;
