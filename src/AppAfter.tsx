import React, { useDeferredValue, useState } from "react";
import "./App.css";
import { ComplexComponentAfter } from "./components/ComplexComponentAfter";
import { SimpleComponent } from "./components/SimpleComponent";

function AppAfter() {
  const [counter, setCounter] = useState(0);
  const deferredCounter = useDeferredValue(counter);
  console.log("counter", counter);
  return (
    <div className="App">
      <ComplexComponentAfter
        counter={deferredCounter}
        isStale={deferredCounter !== counter}
      />
      <SimpleComponent counter={counter} />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default AppAfter;
