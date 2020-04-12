//секундомер
import React from 'react';

const Stopwatch = ({currentTime=''}) => (
  <div>
    Секундомер: {currentTime} сек.
  </div>
);

export default Stopwatch;
