import React, { useEffect, useState } from 'react';

export const HookMouse = () => {
  const [pos, setPos] = useState({ X: 0, Y: 0 });

  function mouseMoveHandler(event) {
    console.log('mouseMoveHandler running');
    setPos({ X: event.clientX, Y: event.clientY });
  }

  useEffect(() => {
    console.log('useeffect running');

    window.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);
  return (
    <div>
      {console.log('rendering')}
      <h1>Mouse Position</h1>
      <p>
        {pos.X} :::: {pos.Y}
      </p>
    </div>
  );
};
