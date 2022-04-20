import React, { useState } from "react";
import "./App.css";
import { SimpleComponent } from "./components/SimpleComponent";
import { CostlyRenderComponent } from "./components/CostlyRenderComponent";

export const AppStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

function AppWithSynchronousRendering() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App" style={AppStyle}>
      <CostlyRenderComponent counter={counter} />
      <SimpleComponent counter={counter} />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default AppWithSynchronousRendering;
