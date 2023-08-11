import { act, renderHook } from "@testing-library/react";
import { useEditPanel } from "../useEditPanel";
import { fakeProfiles } from "../../fakeProfile/fakeProfiles";

describe("useEditPanel", () => {
  test("Should render initial state", () => {
    const { result } = renderHook(({ users }) => useEditPanel(users), {
      initialProps: { users: [] },
    });

    expect(result.current.isEditMode).toBe(false);
    expect(result.current.usersIdsSelected).toEqual([]);
  });

  test("Should update isEditMode on handleEditMode", () => {
    const { result } = renderHook(({ users }) => useEditPanel(users), {
      initialProps: { users: [] },
    });

    act(() => {
      result.current.handleEditMode();
    });

    expect(result.current.isEditMode).toBe(true);
  });

  test("Should update usersIdsSelected on handleToggleAllUsers", () => {
    const mockUsers = fakeProfiles;
    const mockIds = [748, 1];
    const { result } = renderHook(({ users }) => useEditPanel(users), {
      initialProps: { users: mockUsers },
    });

    act(() => {
      result.current.handleToggleAllUsers();
    });
    expect(result.current.usersIdsSelected).toEqual(mockIds);

    act(() => {
      result.current.handleToggleAllUsers();
    });
    expect(result.current.usersIdsSelected).toEqual([]);
  });

  test("Should update usersIdsSelected on handleCheckOneUser", () => {
    const mockUsers = fakeProfiles;
    const mockUserId1 = mockUsers[0].id;
    const mockUserId2 = mockUsers[1].id;
    const mockOneId = [748];
    const mockIds = [748, 1];
    const { result } = renderHook(({ users }) => useEditPanel(users), {
      initialProps: { users: mockUsers },
    });

    act(() => {
      result.current.handleCheckOneUser(mockUserId1);
    });
    expect(result.current.usersIdsSelected).toEqual(mockOneId);

    act(() => {
      result.current.handleCheckOneUser(mockUserId2);
    });
    expect(result.current.usersIdsSelected).toEqual(mockIds);

    act(() => {
      result.current.handleCheckOneUser(mockUserId2);
    });
    expect(result.current.usersIdsSelected).toEqual(mockOneId);
  });
});
