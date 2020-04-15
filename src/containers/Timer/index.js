//таймер
import React from 'react';
import PropTypes from 'prop-types';
import {
  increaseInterval,
  decreaseInterval
} from '../../redux/actionCreator';
import {connect} from '../../react-redux'
import ControlButtons from '../../components/ControlButtons';
import SetInterval from '../../components/SetInterval';
import Stopwatch from '../../components/Stopwatch';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentTime: 0};
  }

<<<<<<< HEAD
  
  tick = () => {
    console.log('tick', this.props.currentInterval)
    this.setState({currentTime: this.state.currentTime + this.props.currentInterval});
  }

  createInterval = () => (
=======
  handleStart = () => {
    if(this.props.currentInterval > 0 ){
>>>>>>> 501d6170e53df9abf466cc5252be4756409fd4b0
      this.timerID = setInterval(
        this.tick,
        this.props.currentInterval*1000
      )
  )

  handleStart = () => {
    if(this.props.currentInterval > 0 ){
      this.createInterval();
    }
  }

  handleStop = () => {
    clearInterval(this.timerID);
    this.setState({currentTime: 0});
  }

  componentDidUpdate(prevProps){
    if (
        this.props.currentInterval !== prevProps.currentInterval &&
        this.state.currentTime !== 0
    ) {
      console.log(this.props.currentInterval+' '+prevProps.currentInterval);
      clearInterval(this.timerID);
      this.handleStart();
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    this.handleStart();
  }

  render() {
    return (
      <div>
        <SetInterval
          currentInterval={this.props.currentInterval}
          increaseInterval={this.props.increaseInterval}
          decreaseInterval={this.props.decreaseInterval}
        />
        <Stopwatch
          currentTime={this.state.currentTime}
        />
        <ControlButtons
          handleStart={this.handleStart}
          handleStop={this.handleStop}
        />
      </div>
    )
  }
}

SetInterval.propTypes = {
  currentInterval: PropTypes.number,
  decreaseInterval: PropTypes.func,
  increaseInterval: PropTypes.func
};

const mapStateToProps = (state) => ({
  currentInterval: state.currentInterval
});

const mapDispatchToProps = (dispatch) => ({
  increaseInterval: () => dispatch(increaseInterval()),
  decreaseInterval: () => dispatch(decreaseInterval())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
