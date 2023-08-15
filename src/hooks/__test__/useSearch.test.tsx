import { act, renderHook } from "@testing-library/react";
import { useSearch } from "../useSearch";
import { ChangeEvent } from "react";
import { EMPTY_STRING } from "../../ts/constants";

describe("useSearch", () => {
  test("Should return nothing when given empty string", () => {
    const { result } = renderHook(useSearch);
    const emptySearchValue = EMPTY_STRING;
    const searchValue = result.current.searchValue;

    expect(searchValue).toBe(emptySearchValue);
  });

  test("Should return 'tomfsc' when given 'tomfsc", () => {
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

  test("Should return nothing when user clicks on cancel icon", () => {
    const { result } = renderHook(() => useSearch("tomfsc"));
    const emptySearchValue = EMPTY_STRING;

    act(() => result.current.handleClearSearchValue());

    const searchValueAfterUserClicks = result.current.searchValue;

    expect(searchValueAfterUserClicks).toBe(emptySearchValue);
  });
});
