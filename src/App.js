import React from 'react';

import './App.css';

// ************ {Class Component import} ************
// import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
// import { Hero } from './Components/ErrorBoundary/Hero';
// import ClickCounter from './Components/HigherOrder/ClickCounter';
// import HoverCounter from './Components/HigherOrder/HoverCounter';
// import ClickCounter from './Components/RenderProps/ClickCounter';
// import HoverCounter from './Components/RenderProps/HoverCounter';
// import Input from './Components/Input/Input';
// import LifecycleCreate from './Components/LifecycleMethods/LifecycleCreate';
// import ParentComponent from './Components/PureComponent/ParentComponent';
// import ParentRef from './Components/Refs/ParentRef';
// import Counter from './Components/RenderProps/Counter';
//
//
//
// ************ {Functional Hook Component import} ************

//import { ObjectState } from './Hooks/UseState/ObjectState';
//import { Counter } from './Hooks/Counter/Counter';
// import { MouseContainer } from './Hooks/UseEffect/MouseContainer';
//import { ArrayState } from './Hooks/UseState/ArrayState';
// import { IntervalHookCounter } from './Hooks/UseEffect/IntervalHookCounter';

import { CallApi } from './Hooks/ApiCall/CallApi';

function App() {
  return (
    <div className="App">
      {/************ Class Component ************/}

      {/* <ParentComponent /> */}
      {/* <Input />
      <LifecycleCreate /> */}
      {/* <ParentRef /> */}
      {/* <ErrorBoundary>
        <Hero heroName={'Batman'} />
        <Hero heroName={'Superman'} />
        <Hero heroName={'joker'} />
      </ErrorBoundary> */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <Counter
        render={(countHandler, count) => (
          <ClickCounter countHandler={countHandler} count={count} />
        )}
      />
      <Counter
        render={(countHandler, count) => (
          <HoverCounter countHandler={countHandler} count={count} />
        )}
      /> */}

      {/************ Functional Hook Component ************/}

      {/* <Counter /> */}
      {/* <ObjectState /> */}
      {/* <ArrayState /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      <CallApi />
    </div>
  );
}

export default App;
