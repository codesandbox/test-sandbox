import { useState } from "react";

export function useCount(initialValue: number) {
  const [count, setCount] = useState(initialValue);
  return { count, setCount };
}
