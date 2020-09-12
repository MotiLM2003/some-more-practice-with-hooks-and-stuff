import React, { useState, useEffect } from 'react';

const IntervalCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    console.log('setting interval');
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log(count);
  }, [count]);
  const tick = () => {
    setCount((prev) => prev + 1);
  };
  return <h1>{count}</h1>;
};

export default IntervalCounter;
