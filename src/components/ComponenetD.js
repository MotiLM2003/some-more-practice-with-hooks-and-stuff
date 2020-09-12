import React, { useContext } from 'react';
import { CountContext } from '../App';

const ComponentD = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component D
      <button onClick={() => countContext.dispatch('increment')}>
        Increment
      </button>
      <button onClick={() => countContext.dispatch('decrement')}>
        Decrement
      </button>
      <button onClick={() => countContext.dispatch('reset')}>Reset</button>
      Count : {countContext.count}
    </div>
  );
};

export default ComponentD;
