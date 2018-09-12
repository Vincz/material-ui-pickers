import React from 'react';
import SourcablePanel from '_shared/SourcablePanel';
import { Typography } from '@material-ui/core';

const DatePickerDemoDemo = () => (
  <div>
    <Typography variant="display2" gutterBottom>
      Date range picker
    </Typography>
    <Typography variant="body1" gutterBottom>
      Date pickers use a dialog window to select a range of dates date.
    </Typography>
    <Typography variant="body1">
      The selected days is indicated by a filled circle.
      The range between is indicated by highlight between 2 dates
    </Typography>

    <SourcablePanel
      title="Basic usage"
      sourceFile="Demo/DateRangePicker/BasicRangePicker.jsx"
    />
  </div>
);

export default DatePickerDemoDemo;

