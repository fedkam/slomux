// кнопки управления
import React from 'react';
import PropTypes from 'prop-types';

const ControlButtons = ({handleStart, handleStop}) => (
  <>
    <button type='button' onClick={handleStart}>Старт</button>
    <button type='button' onClick={handleStop}>Стоп</button>
  </>
);

ControlButtons.propTypes = {
  handleStart: PropTypes.func,
  handleStop: PropTypes.func
};

export default ControlButtons;
