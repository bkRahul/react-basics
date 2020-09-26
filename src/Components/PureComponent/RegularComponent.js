import React, { Component } from 'react';

export default class RegularComponent extends Component {
  render() {
    console.log('RegularComponent', this.props.name);
    return (
      <div>
        <p>Regular Component</p>
      </div>
    );
  }
}
