import React from 'react';

const MemoComp = ({ name }) => {
  console.log('MemoComponent', name);
  return (
    <div>
      <p>Mem Component</p>
    </div>
  );
};

export default React.memo(MemoComp);
