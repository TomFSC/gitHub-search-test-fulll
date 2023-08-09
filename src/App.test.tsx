import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders search page correctly", () => {
  render(<App />);
  const container = screen.getByTestId("main-container");
  expect(container).toBeInTheDocument();
});
