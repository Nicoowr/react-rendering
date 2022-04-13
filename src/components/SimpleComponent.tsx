import React from "react";

export const boxStyle: React.CSSProperties = {
  marginBottom: "1.5em",
  border: "solid",
  borderWidth: "0.1em",
  padding: "0.5em",
  margin: "auto",
  width: "655px",
};

export const SimpleComponent = ({ counter }: { counter: number }) => {
  return <div style={boxStyle}>{`Simple component: ${counter}`}</div>;
};
