import React from 'react';

const ClickCounter = ({ countHandler, count }) => {
  return (
    <div>
      <button onClick={countHandler}>Clicked Me {count} Times</button>
    </div>
  );
};

export default ClickCounter;
