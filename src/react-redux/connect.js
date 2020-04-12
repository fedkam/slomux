import React from "react";
import ReactReduxContext from "./ReactReduxContext";
import PropTypes from 'prop-types';

const connect = (mapStateToProps, mapDispatchToProps) => Component => {
  class WrappedComponent extends React.Component {
    render() {
      return (
        <Component
          {...this.props}
          {...mapStateToProps(this.context.getState(), this.props)}
          {...mapDispatchToProps(this.context.dispatch, this.props)}
        />
      )
    }

    componentDidMount() {
      this.unsubscribe = this.context.subscribe(this.handleChange);
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    handleChange = () => {
      // = () => для того чтоб не handleChange.bind(this) при передаче. (сохр. окруж.)
      this.forceUpdate();
    }
  }

  WrappedComponent.contextType = ReactReduxContext;

  WrappedComponent.propTypes = {
    currentInterval: PropTypes.node,
    mapStateToProps: PropTypes.func,
    mapDispatchToProps: PropTypes.func
  };

  return WrappedComponent;
};

export default connect;

//обьяснение от Dan A.
//https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e
