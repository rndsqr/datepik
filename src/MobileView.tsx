import React from 'react';
import { format, parse } from 'date-fns';

type Props = {
  value?: Date;
  onChange: (value: Date) => void;
};

const MobileView = ({ value, onChange }: Props) => {
  let parsedValue = '';
  if (value) {
    parsedValue = format(value, 'yyyy-MM-dd');
  }
  return (
    <input
      type="date"
      value={parsedValue}
      onChange={e => onChange(parse(e.target.value, 'yyyy-MM-dd', new Date()))}
      className="date-pik-mobile"
    />
  );
};

export default MobileView;
