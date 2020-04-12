import React from "react";
import ReactReduxContext from "./ReactReduxContext";
import PropTypes from 'prop-types';

const Provider = ({ store, children }) => {
  return (
    <ReactReduxContext.Provider value={store}>
      {React.Children.only(children)}
    </ReactReduxContext.Provider>
  );
};

Provider.propTypes = {
  store: PropTypes.object,
  children: PropTypes.element
};

export default Provider;
