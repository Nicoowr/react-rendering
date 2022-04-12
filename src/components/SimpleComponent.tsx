import React from "react";

export const SimpleComponent = ({ counter }: { counter: number }) => {
  return (
    <div
      style={{ marginBottom: "1em" }}
    >{`Simple component displays counter: ${counter}`}</div>
  );
};
