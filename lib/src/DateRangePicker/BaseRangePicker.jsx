import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import setDisplayName from 'recompose/setDisplayName';
import withHandlers from 'recompose/withHandlers';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';
import withUtils from '../_shared/WithUtils';

const getInitialRangeState = ({ value }) => value || { start: null, end: null };

export const BaseRangePickerHoc = compose(
  withUtils(),
  setDisplayName('BaseRangePicker'),
  withState('range', 'changeRange', getInitialRangeState),
  withState('isAccepted', 'handleAcceptedChange', false),
  lifecycle({
    componentDidUpdate(prevProps) {
      const { utils, value } = this.props;
      if (prevProps.value !== value || prevProps.utils.locale !== utils.locale) {
        this.props.changeRange(getInitialRangeState(this.props));
      }
    },
  }),
  withHandlers({
    handleClear: ({ onChange }) => () => onChange(null),
    handleAccept: ({ onChange, date }) => () => onChange(date),
    handleChange: ({ changeRange }) => (newDate) => {
      console.log(newDate);
    },
  }),
);

export default toRenderProps(BaseRangePickerHoc);
