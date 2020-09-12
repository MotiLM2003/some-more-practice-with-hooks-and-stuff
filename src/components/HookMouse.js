import React, { useState, useEffect } from 'react';

const HookMouse = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const log = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
    console.log(JSON.stringify(pos));
  };

  useEffect(() => {
    window.addEventListener('mousemove', log);
    return () => {
      window.removeEventListener('mousemove', log);
      console.log('here');
    };
  }, []);
  return (
    <div>
      {pos.x} {pos.y}
    </div>
  );
};

export default HookMouse;
