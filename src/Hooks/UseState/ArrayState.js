import React, { useState } from 'react';

export const ArrayState = () => {
  const [item, setItem] = useState([]);

  function addItem() {
    setItem([...item, Math.floor(Math.random() * 10) + 1]);
  }
  return (
    <div>
      <button onClick={addItem}>Add Number</button>
      <p>{item}</p>
    </div>
  );
};
