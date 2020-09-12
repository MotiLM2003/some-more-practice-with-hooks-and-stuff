import React from 'react';
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

const App = () => {
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
      <DataFetching />
    </div>
  );
};

export default App;
