import { act, renderHook } from "@testing-library/react";
import { useSearch } from "../useSearch";
import { ChangeEvent } from "react";

describe("useSearch", () => {
  test("Render initial searchValue", () => {
    const { result } = renderHook(useSearch);
    expect(result.current.searchValue).toBe("");
    expect(result.current.handleSearch).toBeInstanceOf(Function);
  });
  test("Should update searchValue", () => {
    const { result } = renderHook(useSearch);

    act(() =>
      result.current.handleSearch({
        target: {
          value: "TomFSC",
        },
      } as ChangeEvent<HTMLInputElement>)
    );
    expect(result.current.searchValue).toBe("TomFSC");
  });
});
