import React from "react";

export const boxStyle: React.CSSProperties = {
  marginBottom: "1.5em",
  border: "solid",
  borderWidth: "0.1em",
  padding: "0.5em",
  width: "500px",
};

export const BasicComponent = ({ counter }: { counter: number }) => {
  return <div style={boxStyle}>{`Basic component: ${counter}`}</div>;
};
