import React, { useState } from 'react';
import HookMouse from './HookMouse';

const DisplayMouseEvent = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Display Container</button>
      {display && <HookMouse />}
    </div>
  );
};

export default DisplayMouseEvent;
