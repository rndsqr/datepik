import React from 'react';

type Props = {
  values: string[];
  value: string;
  onChange: (newValue: string) => void;
  onBlur?: () => void;
  className: string;
};

const Select = ({ values, value, onChange,onBlur, className }: Props) => (
  <select
    value={value}
    onChange={e => onChange(e.target.value)}
    onBlur={onBlur}
    className={className}
  >
    <option></option>
    {values.map(value => (
      <option key={value}>{value}</option>
    ))}
  </select>
);

export default Select;
