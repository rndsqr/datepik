import React from 'react';

type Props = {
  values: string[];
  value: string;
  onChange: (newValue: string) => void;
};

const Select = ({ values, value, onChange }: Props) => (
  <select value={value} onChange={e => onChange(e.target.value)}>
    {values.map(value => <option key={value}>{value}</option>)}
  </select>
);

export default Select;