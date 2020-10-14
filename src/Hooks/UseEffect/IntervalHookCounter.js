import React, { useEffect, useState } from 'react';

export const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    console.log('exec');
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(incrementHandler, 1000);
    return () => clearInterval(interval);
  }, [count]);
  return (
    <div>
      {console.log('rendering')}
      <h1>{count}</h1>
    </div>
  );
};
