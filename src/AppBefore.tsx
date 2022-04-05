import React, { useState } from "react";
import "./App.css";
import { ComplexComponentBefore } from "./components/ComplexComponentBefore";
import { SimpleComponent } from "./components/SimpleComponent";

function AppBefore() {
  const [counter, setCounter] = useState(0);
  console.log("counter", counter);
  return (
    <div className="App">
      <div>{counter}</div>
      <ComplexComponentBefore counter={counter} />
      <SimpleComponent counter={counter} />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => void 0}>Dummy</button>
    </div>
  );
}

export default AppBefore;
