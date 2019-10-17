import React from 'react';
import WindowSize from '@reach/window-size';
import MobileView from './MobileView';
import DesktopView from './DesktopView';

type DatepikProps = {
  value?: Date;
  onChange: (value: Date | null) => void;
  onError?: (error: string) => void;
  onBlur?: () => void;
};

export const Datepik = ({ value, onChange, onError, onBlur }: DatepikProps) => (
  <WindowSize>
    {size =>
      size.width > 800 ? (
        <DesktopView
          value={value}
          onChange={onChange}
          onError={onError}
          onBlur={onBlur}
        />
      ) : (
        <MobileView value={value} onChange={onChange} onBlur={onBlur} />
      )
    }
  </WindowSize>
);

export default Datepik;
