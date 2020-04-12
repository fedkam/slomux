// кнопки управления
import React from 'react';

const ControlButtons = (props) => (
  <>
    <button onClick={props.handleStart}>Старт</button>
    <button onClick={props.handleStop}>Стоп</button>
  </>
);

export default ControlButtons;
