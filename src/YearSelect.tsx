import React from 'react';
import Select from './Select';

const range = (start: number, stop: number, step: number) => Array.from({ length: (stop - start) / step + 1}, (_, i) => (start + (i * step)).toString());
const currentYear = (new Date()).getFullYear();
const years = range(currentYear, currentYear - 100, -1);

type Props = {
  value: string;
  onChange: (newValue: string) => void;
};

const YearSelect = ({ value, onChange }: Props) => (
  <Select values={years} value={value} onChange={onChange} />
);

export default YearSelect;