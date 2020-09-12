import React, { useReducer } from 'react';

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      return { ...state, firstCounter: state.firstCounter + action.payload };
    }
    case 'decrement': {
      return { ...state, firstCounter: state.firstCounter - action.payload };
    }
    case 'increment2': {
      return { ...state, secondCounter: state.secondCounter + action.payload };
    }
    case 'decrement2': {
      return { ...state, secondCounter: state.secondCounter - action.payload };
    }
    case 'reset': {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'increment2', payload: 1 })}>
        Increment 2
      </button>
      <button onClick={() => dispatch({ type: 'decrement2', payload: 1 })}>
        Decrement 2
      </button>
      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>
        increment by 5
      </button>

      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <h1>{count.firstCounter}</h1>
      <h2>second counter {count.secondCounter}</h2>
    </div>
  );
};

export default CounterTwo;
