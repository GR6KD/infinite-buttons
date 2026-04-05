import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Button from "./Button";

test("renders game title", () => {
  render(<App />);
  const titleElement = screen.getByText(/let's play a game/i);
  expect(titleElement).toBeInTheDocument();
});

test("clicking main button adds a new button", () => {
  render(<Button />);

  const mainButton = screen.getByText(/click me/i);
  fireEvent.click(mainButton);

  const allButtons = screen.getAllByRole("button");
  expect(allButtons.length).toBeGreaterThan(1);
});
