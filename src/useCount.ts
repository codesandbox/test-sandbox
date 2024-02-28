import { useState } from "react";

export function useCount(defaultCount: number = 10) {
  const [count, setCount] = useState(defaultCount);
  return { count, setCount };
}
