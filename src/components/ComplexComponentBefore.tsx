import React from "react";
import { MD5 } from "object-hash";

import data from "../data/longText.json";

export const ComplexComponentBefore = ({ counter }: { counter: number }) => {
  const hashedCounter = counter === 0 ? counter : MD5(data);
  return <div>{hashedCounter}</div>;
};
