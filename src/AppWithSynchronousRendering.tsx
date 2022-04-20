import React, { useState } from "react";
import "./App.css";
import { BasicComponent } from "./components/BasicComponent";
import { ExpensiveRenderComponent } from "./components/ExpensiveRenderComponent";

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
      <ExpensiveRenderComponent counter={counter} />
      <BasicComponent counter={counter} />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default AppWithSynchronousRendering;
