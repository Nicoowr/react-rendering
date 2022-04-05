import React from "react";
import { render, screen } from "@testing-library/react";
import AppAfter from "./AppAfter";

test("renders learn react link", () => {
  render(<AppAfter />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
