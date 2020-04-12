import React from "react";
import { Provider, createStore } from "./react-redux";
import rootReducer from "./redux/rootReducer";
import Timer from './containers/Timer';

export default function App() {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <Timer />
    </Provider>
  );
}
