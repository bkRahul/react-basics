import React, { Component } from 'react';
import { ForwardRrefInput } from './ForwardRrefInput';

export default class ParentRef extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <ForwardRrefInput ref={this.inputRef} />
        <button onClick={this.inputHandler}>Focus</button>
      </div>
    );
  }
}
