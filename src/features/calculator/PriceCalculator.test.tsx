import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PriceCalculator from "./PriceCalculator";
import { describe, test, expect } from "vitest";

describe("PriceCalculator integration", () => {
  test("calculates total when user types quantity and unit price (AAA)", async () => {
    // Arrange
    render(<PriceCalculator />);
    const user = userEvent.setup();
    const quantityInput = screen.getByLabelText(/quantity/i);
    const unitPriceInput = screen.getByLabelText(/unit price/i);

    // Act
    await user.type(quantityInput, "3");
    await user.type(unitPriceInput, "10.50");

    // Assert
    expect(screen.getByText("Total: $31.50")).toBeInTheDocument();
  });
});
