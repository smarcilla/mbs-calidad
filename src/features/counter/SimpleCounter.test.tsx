import { render, screen, fireEvent } from "@testing-library/react";
import SimpleCounter from "./SimpleCounter";
import { describe, expect, test } from "vitest";

describe("SimpleCounter integration", () => {
  test("increments count when user clicks Increment button", () => {
    // Arrange
    render(<SimpleCounter />);
    const button = screen.getByRole("button", { name: /increment/i });
    const display = screen.getByTestId("count-display");
    expect(display).toHaveTextContent("Count: 0");

    // ActB
    fireEvent.click(button);

    // Assert
    expect(display).toHaveTextContent("Count: 1");
  });
});
