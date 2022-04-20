import React from "react";
import { MD5 } from "object-hash";

import data from "../data/longText.json";
import { boxStyle } from "./SimpleComponent";

export const CostlyRenderComponent = ({
  counter,
  isStale,
}: {
  counter: number;
  isStale?: boolean;
}) => {
  if (isStale) {
    return (
      <div style={boxStyle}>{"Costly render component: I'm loading..."}</div>
    );
  }
  const hashedCounter = counter === 0 ? counter : MD5(data);
  return (
    <div style={boxStyle}>{`Costly render component: ${hashedCounter}`}</div>
  );
};
