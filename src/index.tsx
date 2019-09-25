import React from 'react';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';

export const Datepik = () => {
  return (
    <div>
      <Combobox>
        <ComboboxInput aria-labelledby="demo" />
        <ComboboxPopover>
          <ComboboxList aria-labelledby="demo">
            <ComboboxOption value="Jan" />
            <ComboboxOption value="Feb" />
            <ComboboxOption value="Mar" />
            <ComboboxOption value="Apr" />
            <ComboboxOption value="May" />
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
      <Combobox>
        <ComboboxInput aria-labelledby="demo" />
        <ComboboxPopover>
          <ComboboxList aria-labelledby="demo">
            <ComboboxOption value="1" />
            <ComboboxOption value="2" />
            <ComboboxOption value="3" />
            <ComboboxOption value="4" />
            <ComboboxOption value="5" />
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
      <Combobox>
        <ComboboxInput aria-labelledby="demo" />
        <ComboboxPopover>
          <ComboboxList aria-labelledby="demo">
            <ComboboxOption value="1901" />
            <ComboboxOption value="1902" />
            <ComboboxOption value="1903" />
            <ComboboxOption value="1904" />
            <ComboboxOption value="1905" />
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div> 
  );
};
