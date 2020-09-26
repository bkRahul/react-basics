import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.countHandler = this.countHandler.bind(this);
  }

  countHandler() {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return this.props.render(this.countHandler, this.state.count);
  }
}
