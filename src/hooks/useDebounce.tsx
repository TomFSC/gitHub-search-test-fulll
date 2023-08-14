import { useEffect, useState } from "react";
import { DEBOUNCE_DELAY } from "../ts/constants";

//use constant delay
export const useDebounce = (value: string, delay = DEBOUNCE_DELAY) => {
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
