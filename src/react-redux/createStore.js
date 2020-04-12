import PropTypes from 'prop-types';

function createStore(rootReducer, initialState) {
  let state = rootReducer(initialState, { type: "INIIIT" });
  const subscribers = [];

  return {
    dispatch(action) {
      state = rootReducer(state, action);
      subscribers.forEach(func => func());
    },
    subscribe(callback) {
      subscribers.push(callback);
      return () => subscribers.pop(); // unsubscribe...
    },
    getState() {
      return state;
    }
  };
}

createStore.propTypes = {
  initialState: PropTypes.node,
  rootReducer: PropTypes.func
};

export default createStore;
