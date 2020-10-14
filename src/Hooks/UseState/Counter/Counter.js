import React, { useEffect, useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  function incrementHandler() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={incrementHandler}>Increment</button>
    </div>
  );
};
