import React from "react";
import ReactReduxContext from "./ReactReduxContext";

const Provider = ({ store, children }) => {
  return (
    <ReactReduxContext.Provider value={store}>
      {React.Children.only(children)}
    </ReactReduxContext.Provider>
  );
};

export default Provider;
