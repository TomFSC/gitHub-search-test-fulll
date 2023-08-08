import { renderHook } from "@testing-library/react";
import useDebounce from "../useDebounce";

test("useDebounce with value", async () => {
  const value = "TomFSC";
  const { result } = renderHook(() => useDebounce(value));
  expect(result.current).toEqual("TomFSC");
});
