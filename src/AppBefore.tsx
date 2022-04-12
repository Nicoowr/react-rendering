import React, { useState } from "react";
import "./App.css";
import { ComplexComponentBefore } from "./components/ComplexComponentBefore";
import { SimpleComponent } from "./components/SimpleComponent";

function AppBefore() {
  const [counter, setCounter] = useState(0);
  console.log("counter", counter);
  return (
    <div className="App">
      <ComplexComponentBefore counter={counter} />
      <SimpleComponent counter={counter} />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default AppBefore;
