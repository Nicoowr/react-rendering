import React from "react";
import { render, screen } from "@testing-library/react";
import AppWithAsynchronousRendering from "./AppWithAsynchronousRendering";

test("renders learn react link", () => {
  render(<AppWithAsynchronousRendering />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
