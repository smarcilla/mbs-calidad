import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LikeButton from "./LikeButton";
import { describe, test, expect } from "vitest";

describe("LikeButton integration", () => {
  test("increments likes when user clicks the button (AAA)", async () => {
    // Arrange
    render(<LikeButton />);
    const button = screen.getByRole("button", { name: /like \(0\)/i });

    // Act
    await userEvent.click(button);

    // Assert
    expect(button).toHaveTextContent(/like \(1\)/i);
  });
});
