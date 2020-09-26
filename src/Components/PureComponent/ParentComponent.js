import React, { Component } from 'react';
import MemoComp from '../MemoComp/MemoComp';
import PureComp from './PureComp';
import RegularComponent from './RegularComponent';

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'rahul',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'satya',
      });
    }, 300);
  }
  render() {
    console.log('ParentComponent');
    return (
      <div>
        {/* <RegularComponent name={this.state.name} />
        <PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}
