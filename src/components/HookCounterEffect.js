import React, { useState, useEffect } from 'react';

const HookCounterEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    document.title = `you clicked ${count} times`;
    console.log('rendred');
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click {count}
      </button>
      <br />

      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h1>{name}</h1>
    </div>
  );
};

export default HookCounterEffect;
