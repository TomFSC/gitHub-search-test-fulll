import { act, renderHook } from "@testing-library/react";
import { useEditPanel } from "../useEditPanel";
import { EditMode } from "../../ts/constants";

describe("useEditPanel", () => {
  test("Should not display EditPanel by default", () => {
    //arrange
    const { result } = renderHook(useEditPanel);
    const isEditModeInitial = result.current.isEditMode;

    //act

    //assert
    expect(isEditModeInitial).toBe(EditMode.OFF);
  });

  test("Should display EditPanel when user enters in edit mode", () => {
    //arrange
    const { result } = renderHook(useEditPanel);

    //act
    act(() => {
      result.current.handleToggleEditMode();
    });

    //assert
    const isEditModeAfterToggled = result.current.isEditMode;
    expect(isEditModeAfterToggled).toBe(EditMode.ON);
  });
});
