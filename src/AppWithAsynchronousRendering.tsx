import React, { useDeferredValue, useState } from "react";
import "./App.css";
import { AppStyle } from "./AppWithSynchronousRendering";
import { ExpensiveRenderComponent } from "./components/ExpensiveRenderComponent";
import { BasicComponent } from "./components/BasicComponent";

function AppWithAsynchronousRendering() {
  const [counter, setCounter] = useState(0);
  const deferredCounter = useDeferredValue(counter);

  return (
    <div className="App" style={AppStyle}>
      <ExpensiveRenderComponent
        counter={deferredCounter}
        isStale={deferredCounter !== counter}
      />
      <BasicComponent counter={counter} />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default AppWithAsynchronousRendering;
