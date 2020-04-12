//секундомер
import React from 'react';
import PropTypes from 'prop-types';

const Stopwatch = ({currentTime}) => (
  <div>
    Секундомер: {currentTime} сек.
  </div>
);

Stopwatch.propTypes = {
  currentTime: PropTypes.number
};

export default Stopwatch;
