import React from "react";
import { MD5 } from "object-hash";

import data from "../data/longText.json";

export const ComplexComponentV2 = ({
  counter,
  isStale,
}: {
  counter: number;
  isStale?: boolean;
}) => {
  if (isStale) {
    return <div style={{ marginBottom: "1em" }}>{"I'm loading..."}</div>;
  }
  const hashedCounter = counter === 0 ? counter : MD5(data);
  return (
    <div
      style={{ marginBottom: "1em" }}
    >{`Complex component hashed counter: ${hashedCounter}`}</div>
  );
};
