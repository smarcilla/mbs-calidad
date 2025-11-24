import { describe, it, expect } from "vitest";
import { calculateTax } from "./calculateTax";

describe("calculateTax", () => {
  it("calculateTax(100, 10) should return 10 (GREEN step)", () => {
    // Arrange
    const amount = 100;
    const taxRate = 10;

    // Act
    const result = calculateTax(amount, taxRate);

    // Assert
    expect(result).toBe(10);
  });
  it("calculateTax(200, 15) should return 30 (TRIANGULATION)", () => {
    // Arrange
    const amount = 200;
    const taxRate = 15;

    // Act
    const result = calculateTax(amount, taxRate);

    // Assert
    expect(result).toBe(30);
  });
});
