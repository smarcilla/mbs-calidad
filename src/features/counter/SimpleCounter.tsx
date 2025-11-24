import React, { useState } from "react";

export default function SimpleCounter(): React.ReactElement {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p data-testid="count-display">Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
