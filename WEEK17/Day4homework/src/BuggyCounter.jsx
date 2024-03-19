// BuggyCounter.js
import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  componentDidUpdate() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }
  }

  render() {
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={() => this.handleClick()}>Increment Counter</button>
      </div>
    );
  }
}

export default BuggyCounter;