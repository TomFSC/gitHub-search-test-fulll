import { act, renderHook } from "@testing-library/react";
import { useEditPanel } from "../useEditPanel";
import { EditMode } from "../../ts/constants";

describe("useEditPanel", () => {
  test("Should not display EditPanel by default", () => {
    const { result } = renderHook(useEditPanel);
    const isEditModeInitial = result.current.isEditMode;

    expect(isEditModeInitial).toBe(EditMode.OFF);
  });

  test("Should display EditPanel when user enters in edit mode", () => {
    const { result } = renderHook(() => useEditPanel(EditMode.OFF));

    act(() => {
      result.current.handleToggleEditMode();
    });

    const isEditModeAfterToggled = result.current.isEditMode;
    expect(isEditModeAfterToggled).toBe(EditMode.ON);
  });

  test("Should not display EditPanel when user leaves edit mode", () => {
    const { result } = renderHook(() => useEditPanel(EditMode.ON));

    act(() => {
      result.current.handleToggleEditMode();
    });

    const isEditModeAfterToggled = result.current.isEditMode;
    expect(isEditModeAfterToggled).toBe(EditMode.OFF);
  });
});
