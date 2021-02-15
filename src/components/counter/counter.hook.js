import { useState } from "react";

export function useCounter(initialState) {
  const [count, setCount] = useState(initialState ?? 0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return {
    count,
    increment,
    decrement,
  };
}
