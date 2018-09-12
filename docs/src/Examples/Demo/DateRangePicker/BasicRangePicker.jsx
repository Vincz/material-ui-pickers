import React, { Fragment, PureComponent } from 'react';
import DateRangePicker from 'material-ui-pickers/DateRangePicker';

export default class BasicDatePicker extends PureComponent {
  state = {
    selectedRange: {
      start: '2018-01-01T00:00:00.000Z',
      end: '2018-01-15T00:00:00.000Z',
    },
  }

  handleRangeChange = (date) => {
    this.setState({ selectedRange: date });
  }

  render() {
    const { selectedRange } = this.state;

    return (
      <Fragment>
        <div className="picker">
          <DateRangePicker
            label="Basic example"
            value={selectedRange}
            onChange={this.handleRangeChange}
            animateYearScrolling
          />
        </div>
      </Fragment>
    );
  }
}
