import { act, renderHook } from "@testing-library/react";
import { useSearch } from "../useSearch";
import { ChangeEvent } from "react";

describe("useSearch", () => {
  test("Should return initial searchValue on first render", () => {
    const { result } = renderHook(useSearch);
    const initialSearchValue = "";
    const searchValue = result.current.searchValue;

    expect(searchValue).toBe(initialSearchValue);
  });

  test("Should update searchValue when user enters value on input", () => {
    const { result } = renderHook(useSearch);
    const userSearchValueEntered = "TomFSC";

    act(() =>
      result.current.handleChange({
        target: {
          value: userSearchValueEntered,
        },
      } as ChangeEvent<HTMLInputElement>)
    );

    const searchValue = result.current.searchValue;

    expect(searchValue).toBe(userSearchValueEntered);
  });

  test("Should clear searchValue when user clicks on cancel icon", () => {
    const { result } = renderHook(useSearch);
    const initialSearchValue = "";
    const userSearchValueEntered = "TomFSC";

    act(() =>
      result.current.handleChange({
        target: {
          value: userSearchValueEntered,
        },
      } as ChangeEvent<HTMLInputElement>)
    );

    const searchValue = result.current.searchValue;

    expect(searchValue).toBe(userSearchValueEntered);

    act(() => result.current.handleClearSearchValue());

    const searchValueAfterUserClicks = result.current.searchValue;

    expect(searchValueAfterUserClicks).toBe(initialSearchValue);
  });
});
