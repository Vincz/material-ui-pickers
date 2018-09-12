import React from 'react';
import { Switch, Route } from 'react-router';

import DatePickerDemo from './DatePickerDemo';
import TimePickerDemo from './TimePickerDemo';
import DateTimePickerDemo from './DateTimePickerDemo';
import DateRangePickerDemo from './DateRangePickerDemo';

export default () => (
  <Switch>
    <Route path="/demo/datepicker" component={DatePickerDemo} />
    <Route path="/demo/timepicker" component={TimePickerDemo} />
    <Route path="/demo/datetimepicker" component={DateTimePickerDemo} />
    <Route path="/demo/daterangepicker" component={DateRangePickerDemo} />
  </Switch>
);

