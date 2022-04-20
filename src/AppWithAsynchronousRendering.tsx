import React, { useDeferredValue, useState } from "react";
import "./App.css";
import { AppStyle } from "./AppWithSynchronousRendering";
import { CostlyRenderComponent } from "./components/CostlyRenderComponent";
import { SimpleComponent } from "./components/SimpleComponent";

function AppWithAsynchronousRendering() {
  const [counter, setCounter] = useState(0);
  const deferredCounter = useDeferredValue(counter);

  return (
    <div className="App" style={AppStyle}>
      <CostlyRenderComponent
        counter={deferredCounter}
        isStale={deferredCounter !== counter}
      />
      <SimpleComponent counter={counter} />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default AppWithAsynchronousRendering;
