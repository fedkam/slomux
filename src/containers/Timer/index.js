//таймер
import React from 'react';
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

  tick() {
    this.setState({currentTime: this.state.currentTime + 1});
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleStart = () => {
    this.timerID = setInterval(
      () => this.tick(),
      this.props.currentInterval*1000
    );
  }

  handleStop = () => {
    clearInterval(this.timerID);
    this.setState({currentTime: 0});
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

const mapStateToProps = (state) => ({
  currentInterval: state.currentInterval,
  currentInterval2: state.currentInterval2
})

const mapDispatchToProps = (dispatch) => ({
  increaseInterval: () => dispatch(increaseInterval()),
  decreaseInterval: () => dispatch(decreaseInterval())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
