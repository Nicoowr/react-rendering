import React, { useDeferredValue, useState } from "react";
import "./App.css";
import { AppStyle } from "./AppV1";
import { ComplexComponentV2 } from "./components/ComplexComponentV2";
import { SimpleComponent } from "./components/SimpleComponent";

function AppV2() {
  const [counter, setCounter] = useState(0);
  const deferredCounter = useDeferredValue(counter);
  console.log("counter", counter);
  return (
    <div className="App" style={AppStyle}>
      <ComplexComponentV2
        counter={deferredCounter}
        isStale={deferredCounter !== counter}
      />
      <SimpleComponent counter={counter} />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default AppV2;
