import { act, renderHook } from "@testing-library/react";
import { useDebounce } from "../useDebounce";
import { DEBOUNCE_DELAY } from "../../ts/constants";

const INITIAL_SEARCH_VALUE = "initial";
const UPDATED_SEARCH_VALUE = "updated";

describe("useDebounce", () => {
  const initialPropsForUseDebounce = {
    initialProps: { value: INITIAL_SEARCH_VALUE, delay: DEBOUNCE_DELAY },
  };

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test("Should return the initial value", () => {
    const { result } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      initialPropsForUseDebounce
    );
    const debouncedValue = result.current;

    expect(debouncedValue).toBe(INITIAL_SEARCH_VALUE);
  });

  test("Should debounce the input value", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      initialPropsForUseDebounce
    );

    const debouncedValueAfterRerender = result.current;

    rerender({ value: UPDATED_SEARCH_VALUE, delay: DEBOUNCE_DELAY });

    expect(debouncedValueAfterRerender).toBe(INITIAL_SEARCH_VALUE);

    act(() => {
      jest.advanceTimersByTime(DEBOUNCE_DELAY);
    });

    const debouncedValueAfterRerenderAndDebounce = result.current;

    expect(debouncedValueAfterRerenderAndDebounce).toBe(UPDATED_SEARCH_VALUE);
  });

  test("should clear the timeout on unmount", () => {
    const { result, unmount } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      initialPropsForUseDebounce
    );

    expect(result.current).toBe(INITIAL_SEARCH_VALUE);

    unmount();

    act(() => {
      jest.advanceTimersByTime(DEBOUNCE_DELAY);
    });

    expect(result.current).toBe(INITIAL_SEARCH_VALUE);
  });
});
