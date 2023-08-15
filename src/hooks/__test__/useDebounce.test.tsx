import { act, renderHook } from "@testing-library/react";
import { useDebounce } from "../useDebounce";
import { DEBOUNCE_DELAY } from "../../ts/constants";

const searchValueBeforeDebounce = "tomfsc";

describe("useDebounce", () => {
  const initialPropsForUseDebounce = {
    initialProps: { value: searchValueBeforeDebounce, delay: DEBOUNCE_DELAY },
  };

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test("Should return 'tomfsc' with a delay of 500ms when given 'tomfsc'", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      initialPropsForUseDebounce
    );

    const debouncedValueAfterRerender = result.current;

    rerender({ value: searchValueBeforeDebounce, delay: DEBOUNCE_DELAY });

    expect(debouncedValueAfterRerender).toBe(searchValueBeforeDebounce);

    act(() => {
      jest.advanceTimersByTime(DEBOUNCE_DELAY);
    });

    const debouncedValueAfterRerenderAndDebounce = result.current;

    expect(debouncedValueAfterRerenderAndDebounce).toBe(
      searchValueBeforeDebounce
    );
  });

  test("should clear the timeout on unmount", () => {
    const { result, unmount } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      initialPropsForUseDebounce
    );

    expect(result.current).toBe(searchValueBeforeDebounce);

    unmount();

    act(() => {
      jest.advanceTimersByTime(DEBOUNCE_DELAY);
    });

    expect(result.current).toBe(searchValueBeforeDebounce);
  });
});
