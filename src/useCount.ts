import { useState } from "react";

function useCount(initialValue: number) {
    const [count, setCount] = useState(initialValue);
    return { count, setCount };
}

export default useCount;
