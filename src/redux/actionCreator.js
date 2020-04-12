import { CHANGE_INTERVAL, INCREASE_INTERVAL, DECREASE_INTERVAL} from "./types";

export const changeInterval = value => ({
  type: CHANGE_INTERVAL,
  payload: value
})
export const increaseInterval = () => ({
  type: INCREASE_INTERVAL
})
export const decreaseInterval = () => ({
  type: DECREASE_INTERVAL
})
