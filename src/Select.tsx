import React from 'react';

type Props = {
  values: string[];
  value: string;
  onChange: (newValue: string) => void;
  className: string;
};

const Select = ({ values, value, onChange, className }: Props) => (
  <select
    value={value}
    onChange={e => onChange(e.target.value)}
    className={className}
  >
    <option></option>
    {values.map(value => (
      <option key={value}>{value}</option>
    ))}
  </select>
);

export default Select;
