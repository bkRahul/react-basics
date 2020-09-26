import React from 'react';
import WithCounter from './WithCounter';

const HoverCounter = ({ countHandler, count }) => {
  return (
    <div>
      <h1 onMouseOver={countHandler}>Hoverd Me {count} Times</h1>
    </div>
  );
};

export default WithCounter(HoverCounter, 5);
