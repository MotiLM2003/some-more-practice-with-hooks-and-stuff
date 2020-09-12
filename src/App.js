import React, { useReducer, createContext } from 'react';
import ClassCounter from './components/ClassCounter';
import HookCounterTwo from './hookCounterTwo';
import HookObject from './components/HookObject';
import HookCounterArray from './HookCounterArray';
import HookCounterEffect from './components/HookCounterEffect';
import HookMouse from './components/HookMouse';
import DisplayMouseEvent from './components/DisplayMouseEvent';
import IntervalCounter from './components/IntervalCounter';
import IntervalContainer from './components/intervalContainer';
import DataFetching from './components/DataFetching';
import CounterOne from './components/Counter1';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/counterThree';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponenetB';
import ComponentC from './components/ComponentC';
import DataFetchingOne from './components/DataFetchingOne';
import DataFatchingReducer from './components/DataFatchingReducer';

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment': {
      return state + 1;
    }
    case 'decrement': {
      return state - 1;
    }
    case 'reset': {
      return initialState;
    }
    default: {
      return 0;
    }
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='App'>
      {/* <ClassCounter /> */}
      {/* 
      <HookCounterTwo /> */}
      {/* <HookObject /> */}
      {/* <HookCounterArray /> */}
      {/* <HookCounterEffect /> */}
      {/* <DisplayMouseEvent /> */}
      {/* <IntervalContainer /> */}
      {/* <DataFetching /> */}
      {/* <CounterThree /> */}
      {/* <h1>Count: {count}</h1>
      <CountContext.Provider value={{ count, dispatch }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}
      {/* <DataFetchingOne /> */}
      <DataFatchingReducer />
    </div>
  );
};

export default App;
