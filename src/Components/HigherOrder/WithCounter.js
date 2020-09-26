import React from 'react';

const withCounter = (WrappedComponent, incNum) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
      this.countHandler = this.countHandler.bind(this);
    }

    countHandler() {
      this.setState(prevState => ({
        count: prevState.count + incNum,
      }));
    }
    render() {
      return (
        <div>
          <WrappedComponent
            countHandler={this.countHandler}
            count={this.state.count}
          />
        </div>
      );
    }
  }
  return WithCounter;
};

export default withCounter;
