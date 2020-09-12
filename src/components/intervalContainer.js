import React, { useState } from 'react';
import IntervalCounter from './IntervalCounter';

const IntervalContainer = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>toggle counter</button>
      {display && <IntervalCounter />}
    </div>
  );
};
export default IntervalContainer;
