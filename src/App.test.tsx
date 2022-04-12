import React from "react";
import { render, screen } from "@testing-library/react";
import AppV2 from "./AppV2";

test("renders learn react link", () => {
  render(<AppV2 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
