import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { Icon } from '@material-ui/core';
import DomainPropTypes from '../constants/prop-types';
import PickerToolbar from '../_shared/PickerToolbar';
import ToolbarButton from '../_shared/ToolbarButton';
import withUtils from '../_shared/WithUtils';


class DateRangePicker extends PureComponent {
  static propTypes = {
    utils: PropTypes.object.isRequired,
    range: DomainPropTypes.range.isRequired,
    classes: PropTypes.object.isRequired,
  };

  state = {
    showYearSelection: false,
  }

  componentDidMount() {

  }

  render() {
    const { showYearSelection } = this.state;
    const { utils, range, classes } = this.props;

    return (
      <>
        <div className={classes.toolbarContainer}>
          <PickerToolbar>
            <ToolbarButton
              variant="subheading"
              onClick={this.openYearSelection}
              selected={showYearSelection}
              label={utils.getYearText(range.start)}
            />
            <ToolbarButton
              variant="display1 "
              onClick={this.openCalendar}
              selected={!showYearSelection}
              label={utils.getDatePickerHeaderText(range.start)}
            />
          </PickerToolbar>

          <PickerToolbar>
            <Icon> arrow_forward  </Icon>
          </PickerToolbar>

          <PickerToolbar>
            <ToolbarButton
              variant="display1"
              onClick={this.openCalendar}
              selected={!showYearSelection}
              label={utils.getDatePickerHeaderText(range.end)}
            />
          </PickerToolbar>
        </div>
      </>
    );
  }
}

const styles = {
  toolbarContainer: {
    display: 'flex',
  },
};

export default compose(
  withUtils(),
  withStyles(styles),
)(DateRangePicker);
