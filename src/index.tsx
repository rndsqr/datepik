import React from 'react';
import WindowSize from '@reach/window-size';
import MobileView from './MobileView';
import DesktopView from './DesktopView';


type DatepikProps = {
  value?: Date;
  onChange: (value: Date) => void;
};


export const Datepik = ({ value, onChange }: DatepikProps) => (
  <WindowSize>
    {(size) => size.width > 800 ?
      <DesktopView value={value} onChange={onChange} /> : 
      <MobileView value={value} onChange={onChange} />
    }
  </WindowSize>
);

export default Datepik;
