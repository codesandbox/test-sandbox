import { useState } from "react";

function useCount(defaultValue) {
  const [count, setCount] = useState(defaultValue);
  return [count, setCount];
}

export default useCount;
