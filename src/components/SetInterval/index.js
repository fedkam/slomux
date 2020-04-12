//интервал обновления
import React from 'react';
import PropTypes from 'prop-types';

const SetInterval = ({currentInterval, decreaseInterval, increaseInterval}) => (
  <>
    <span>
      Интервал обновления секундомера: {currentInterval} сек.
    </span>

    <span>
      <button onClick={() => decreaseInterval()}> - </button>
      <button onClick={() => increaseInterval()}> + </button>
    </span>
  </>
);

SetInterval.propTypes = {
  currentInterval: PropTypes.number,
  decreaseInterval: PropTypes.func,
  increaseInterval: PropTypes.func
};

export default SetInterval;
