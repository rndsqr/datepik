import React from 'react';
import { format, parse, isValid } from 'date-fns';

type Props = {
  value?: Date;
  onChange: (value: Date | undefined) => void;
  onBlur?: () => void;
};

const MobileView = ({ value, onChange, onBlur }: Props) => {
  let parsedValue = '';
  if (value && isValid(value)) {
    parsedValue = format(value, 'yyyy-MM-dd');
  }
  return (
    <input
      type="date"
      value={parsedValue}
      onChange={e => {
        const newDate = parse(e.target.value, 'yyyy-MM-dd', new Date());
        if (isValid(newDate)) {
          onChange(newDate);
        } else {
          onChange(undefined);
        }
      }}
      className="date-pik-mobile"
      onBlur={onBlur}
    />
  );
};

export default MobileView;
