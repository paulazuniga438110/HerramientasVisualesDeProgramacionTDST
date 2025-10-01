import { useState } from "react";

export const useCounter = (initial: number = 0) => {
  const [count, setCount] = useState<number>(initial);

  const increaseBy = (value: number) => {
    setCount((c) => c + value);
  };

  const reset = (value: number = initial) => {
    setCount(value);
  };

  return {
    count,
    increaseBy,
    reset,
  };
};

