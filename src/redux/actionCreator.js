import {
  INCREASE_INTERVAL,
  DECREASE_INTERVAL
} from './types';

export const increaseInterval = () => ({
  type: INCREASE_INTERVAL
});

export const decreaseInterval = () => ({
  type: DECREASE_INTERVAL
});
