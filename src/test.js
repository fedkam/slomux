

// APP

// actions
const CHANGE_INTERVAL = 'CHANGE_INTERVAL'

// action creators
const changeInterval = value => ({
  type: CHANGE_INTERVAL,
  payload: value,
})


// reducers
const reducer = (state, action) => {
  switch(action.type) {
    case CHANGE_INTERVAL:
      return state += action.payload
    default:
      return state
      // return {}
  }
}

// components

class IntervalComponent extends React.Component {
  render() {
    return (
      <div>
        <span>Интервал обновления секундомера: {this.props.currentInterval} сек.</span>
        <span>
          <button onClick={() => this.props.changeInterval(-1)}>-</button>
          <button onClick={() => this.props.changeInterval(1)}>+</button>
        </span>
      </div>
    )
  }
}

const Interval = connect(
  state => ({
    currentInterval: state,
  }),
  dispatch => ({
    changeInterval: value => dispatch(changeInterval(value)),
  }),
)(IntervalComponent)

class TimerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  handleStart() {
    setTimeout(() => this.setState({
      currentTime: this.state.currentTime + this.props.currentInterval,
    }), this.props.currentInterval)
  }

  handleStop() {
    this.setState({ currentTime: 0 })
  }

  render() {
    return (
      <div>
        <Interval />
        <div>
          Секундомер: {this.state.currentTime} сек.
        </div>
        <div>
          <button onClick={this.handleStart}>Старт</button>
          <button onClick={this.handleStop}>Стоп</button>
        </div>
      </div>
    )
  }
}

const Timer = connect(state => ({
  currentInterval: state,
}), () => {})(TimerComponent)

// init
ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <Timer />
  </Provider>,
  document.getElementById('app')
)
