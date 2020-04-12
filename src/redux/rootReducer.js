import {INCREASE_INTERVAL, DECREASE_INTERVAL} from "./types";

const initinalState = {currentInterval: 1};

export default function rootReducer(state = initinalState, action) {
  switch (action.type) {
    case INCREASE_INTERVAL:
      return {
        ...state,
        currentInterval: state.currentInterval + 1
      };

    case DECREASE_INTERVAL:
      if(state.currentInterval-1 > 0){
        return {
          ...state,
          currentInterval: state.currentInterval - 1
        };
      }else{
        return {
          ...state,
          currentInterval: 0
        };
      };

    default:
      return state;
  }
}
