import { act, renderHook } from "@testing-library/react";
import { useUsersIdsSelected } from "../useUsersIdsSelected";
import { EMPTY_ARRAY, EditMode } from "../../ts/constants";
import { Users } from "../../fakeDatas/fakeDatas";

describe("useUsersIdsSelected", () => {
  test("Should return empty usersIdsSelected on app launch", () => {
    const { result } = renderHook(useUsersIdsSelected);

    const usersIdsSelectedOnAppLaunch = result.current.usersIdsSelected;

    expect(usersIdsSelectedOnAppLaunch).toEqual(EMPTY_ARRAY);
  });

  test("Should return usersIdsSelected with all users ids when edit mode is on and user toggle all users", () => {
    const users = Users.SMALL;
    const usersIdsSelected = [1, 2];
    const { result } = renderHook(useUsersIdsSelected);

    act(() => {
      result.current.handleToggleAllUsers(EditMode.ON, users);
    });

    const usersIdsSelectedAfterToggleAllUsers = result.current.usersIdsSelected;

    expect(usersIdsSelectedAfterToggleAllUsers).toEqual(usersIdsSelected);
  });

  test("Should clear usersIdsSelected when all users are allready selected and user toggle all users", () => {
    const users = Users.SMALL;
    const defaultUsersIdsSelected = [1, 2];
    const { result } = renderHook(() =>
      useUsersIdsSelected(defaultUsersIdsSelected)
    );

    act(() => {
      result.current.handleToggleAllUsers(EditMode.ON, users);
    });

    const usersIdsSelectedAfterToggleAllUsers = result.current.usersIdsSelected;

    expect(usersIdsSelectedAfterToggleAllUsers).toEqual(EMPTY_ARRAY);
  });

  test("Should return usersIdsSelected with user id of card selected when user checks the user card checkbox", () => {
    const userId = 1;
    const usersIdsSelected = [1];

    const { result } = renderHook(useUsersIdsSelected);

    act(() => {
      result.current.handleCheckOneUser(userId);
    });

    const usersIdsSelectedAfterCheckOneUsers = result.current.usersIdsSelected;

    expect(usersIdsSelectedAfterCheckOneUsers).toEqual(usersIdsSelected);
  });

  test("Should remove user id from usersIdsSelected when user unchecks the user card checkbox", () => {
    const userId = 1;
    const defaultUsersIdsSelected = [1, 2];
    const usersIdsSelected = [2];

    const { result } = renderHook(() =>
      useUsersIdsSelected(defaultUsersIdsSelected)
    );

    act(() => {
      result.current.handleCheckOneUser(userId);
    });

    const usersIdsSelectedAfterCheckOneUsers = result.current.usersIdsSelected;

    expect(usersIdsSelectedAfterCheckOneUsers).toEqual(usersIdsSelected);
  });
});
