import React from 'react';
import WithCounter from './WithCounter';

const ClickCounter = ({ countHandler, count }) => {
  return (
    <div>
      <button onClick={countHandler}>Clicked Me {count} Times</button>
    </div>
  );
};

export default WithCounter(ClickCounter, 2);
