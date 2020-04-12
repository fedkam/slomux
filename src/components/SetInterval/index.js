//интервал обновления
import React from 'react';

const SetInterval = ({currentInterval, decreaseInterval, increaseInterval}) => (
  <>
    <span>
      Интервал обновления секундомера: {currentInterval} сек.
    </span>

    <span>
      <button onClick={() => decreaseInterval()}>-</button>
      <button onClick={() => increaseInterval()}>+</button>
    </span>
  </>
);

export default SetInterval;
