import React from "react";
import { MD5 } from "object-hash";

import data from "../data/longText.json";

export const ComplexComponentAfter = ({
  counter,
  isStale,
}: {
  counter: number;
  isStale?: boolean;
}) => {
  if (isStale) {
    return <div>{"I'm loading..."}</div>;
  }
  const hashedCounter = counter === 0 ? counter : MD5(data);
  return <div>{hashedCounter}</div>;
};
