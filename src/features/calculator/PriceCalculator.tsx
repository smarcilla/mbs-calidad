import React, { useState } from "react";

export default function PriceCalculator(): JSX.Element {
  const [quantity, setQuantity] = useState<string>("");
  const [unitPrice, setUnitPrice] = useState<string>("");

  const q = parseFloat(quantity || "0");
  const p = parseFloat(unitPrice || "0");
  const total = Number.isFinite(q) && Number.isFinite(p) ? q * p : 0;

  return (
    <div>
      <div>
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          type="number"
          inputMode="numeric"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="unit-price">Unit Price</label>
        <input
          id="unit-price"
          type="number"
          step="0.01"
          inputMode="decimal"
          value={unitPrice}
          onChange={(e) => setUnitPrice(e.target.value)}
        />
      </div>

      <p>{`Total: $${total.toFixed(2)}`}</p>
    </div>
  );
}
