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

export default createStore;
