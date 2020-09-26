import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.incrementHandler = this.incrementHandler.bind(this);
    this.incrementFiveHandler = this.incrementFiveHandler.bind(this);
  }

  incrementHandler() {
    console.log(this);
    this.setState(
      prevState => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log(this.state.count);
      }
    );
    console.log(this.state.count);
  }
  incrementFiveHandler() {
    this.incrementHandler();
    this.incrementHandler();
    this.incrementHandler();
    this.incrementHandler();
    this.incrementHandler();
  }

  decrementHandler = () => {
    this.setState(
      {
        count: this.state.count - 1,
      },
      () => {
        console.log(this.state.count);
      }
    );
  };
  decrementFiveHandler = () => {
    this.decrementHandler();
    this.decrementHandler();
    this.decrementHandler();
    this.decrementHandler();
    this.decrementHandler();
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementHandler}>Increment</button>
        <button onClick={this.decrementHandler}>Decrement</button>
        <p>Counter: {this.state.count}</p>
        <button onClick={this.incrementFiveHandler}>Increment</button>
        <button onClick={this.decrementFiveHandler}>Decrement</button>
      </div>
    );
  }
}
