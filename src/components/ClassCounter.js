import React, { useState } from 'react';

const ClassCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>vlaue: {count}</button>
    </div>
  );
};

export default ClassCounter;
