import React from 'react';
import WindowSize from '@reach/window-size';
import MobileView from './MobileView';
import DesktopView from './DesktopView';

type DatepikProps = {
  value?: Date;
  onChange: (value: Date) => void;
  onError?: (error: string) => void;
};

export const Datepik = ({ value, onChange, onError }: DatepikProps) => (
  <WindowSize>
    {size =>
      size.width > 800 ? (
        <DesktopView value={value} onChange={onChange} onError={onError} />
      ) : (
        <MobileView value={value} onChange={onChange} />
      )
    }
  </WindowSize>
);

export default Datepik;
