import { useEffect, useState } from "react";
import { DEBOUNCE_DELAY } from "../ts/constants";

export const useDebounce = (value: string, delay: number = DEBOUNCE_DELAY) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};
