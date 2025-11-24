import { describe, it, expect } from "vitest";
import { calculateSubtotal } from "./calculateSubtotal";

describe("calculateSubtotal", () => {
  it("suma price * quantity de cada item y devuelve 25.50 para los datos de prueba", () => {
    // Arrange: datos de prueba según especificación
    const items = [
      { price: 10, quantity: 2 },
      { price: 5.5, quantity: 1 },
    ];

    // Act: ejecutar la función bajo prueba
    const result = calculateSubtotal(items);

    // Assert: verificar que el subtotal sea 25.50 (usar toBeCloseTo por precisión de punto flotante)
    expect(result).toBeCloseTo(25.5, 2);
  });
});
