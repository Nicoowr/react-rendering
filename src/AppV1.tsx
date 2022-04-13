import React, { useState } from "react";
import "./App.css";
import { ComplexComponentV1 } from "./components/ComplexComponentV1";
import { SimpleComponent } from "./components/SimpleComponent";

export const AppStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

function AppV1() {
  const [counter, setCounter] = useState(0);
  console.log("counter", counter);
  return (
    <div className="App" style={AppStyle}>
      <ComplexComponentV1 counter={counter} />
      <SimpleComponent counter={counter} />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default AppV1;
