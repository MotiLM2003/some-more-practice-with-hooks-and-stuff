import React, { useState } from 'react';
const HookCounterTwo = () => {
  const intialCount = 0;
  const [count, setCount] = useState(intialCount);
  const plusFive = () => {
    for (let i = 0; i <= 4; i++) {
      setCount((p) => p + 1);
    }
  };
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(intialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={plusFive}>+ 5</button>
    </div>
  );
};

export default HookCounterTwo;
