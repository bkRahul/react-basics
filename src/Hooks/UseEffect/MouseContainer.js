import React, { useEffect, useState } from 'react';
import { HookMouse } from './HookMouse';

export const MouseContainer = () => {
  const [hookMouse, setHookMouse] = useState(false);
  function hookMouseHandler(event) {
    setHookMouse(!hookMouse);
  }
  return (
    <div>
      {hookMouse ? <HookMouse /> : ''}
      <button onClick={hookMouseHandler}>
        {hookMouse ? 'Show HookMouse' : 'Hide HookMouse'}
      </button>
    </div>
  );
};
