import React, { PureComponent } from 'react';

export default class PureComp extends PureComponent {
  render() {
    console.log('PureComponent', this.props.name);
    return (
      <div>
        <p>PureComponent</p>
      </div>
    );
  }
}
