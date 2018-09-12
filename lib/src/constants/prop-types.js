import PropTypes from 'prop-types';

const date = PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.string,
  PropTypes.number,
  PropTypes.instanceOf(Date),
]);

const range = PropTypes.shape({ start: date, end: date });

export default {
  date,
  range,
};
