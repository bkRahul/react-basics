import React from 'react';

const HoverCounter = ({ countHandler, count }) => {
  return (
    <div>
      <h1 onMouseOver={countHandler}>Hoverd Me {count} Times</h1>
    </div>
  );
};

export default HoverCounter;
