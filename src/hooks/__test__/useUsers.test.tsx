import { act, renderHook } from "@testing-library/react";
import { useUsers } from "../useUsers";
import { Users } from "../../fakeDatas/fakeDatas";
import { findObjectById } from "../../helpers/array";

const mockUser = [
  {
    avatar_url: "https://avatars.githubusercontent.com/u/102096928?v=4",
    events_url: "https://api.github.com/users/TomFSC/events{/privacy}",
    followers_url: "https://api.github.com/users/TomFSC/followers",
    following_url: "https://api.github.com/users/TomFSC/following{/other_user}",
    gists_url: "https://api.github.com/users/TomFSC/gists{/gist_id}",
    gravatar_id: "",
    html_url: "https://github.com/TomFSC",
    id: 102096928,
    login: "TomFSC",
    node_id: "U_kgDOBhXgIA",
    organizations_url: "https://api.github.com/users/TomFSC/orgs",
    received_events_url: "https://api.github.com/users/TomFSC/received_events",
    repos_url: "https://api.github.com/users/TomFSC/repos",
    score: 1,
    site_admin: false,
    starred_url: "https://api.github.com/users/TomFSC/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/TomFSC/subscriptions",
    type: "User",
    url: "https://api.github.com/users/TomFSC",
  },
];
const mockedUsers = {
  items: [
    { id: 1, login: "John" },
    { id: 2, login: "Jane" },
  ],
};

jest.mock("../../helpers/array", () => ({
  findObjectById: jest.fn(),
  removeByIds: jest.fn(),
}));

jest.mock("../../types/users.ts", () => ({
  Id: "mockedId",
  User: "mockedUser",
}));

describe("useUsers", () => {
  test("Should return users as empty array on first render", () => {
    const initialPropsForUseUsers = {
      initialProps: {
        usersIdsSelected: [],
        setSearchValue: jest.fn(),
        setUsersIdsSelected: jest.fn(),
      },
    };
    const { result } = renderHook(
      ({ usersIdsSelected, setSearchValue, setUsersIdsSelected }) =>
        useUsers(usersIdsSelected, setSearchValue, setUsersIdsSelected),
      initialPropsForUseUsers
    );
    const users = result.current.users;

    expect(users).toEqual([]);
  });

  test("Should duplicate users when user clicks on icon duplicate", async () => {
    // const setSearchValue = jest.fn();
    // const setUsersIdsSelected = jest.fn();
    // (findObjectById as jest.Mock).mockReturnValue({ mockUser });
    // const initialPropsForUseUsers = {
    //   initialProps: {
    //     usersIdsSelected: [102096928],
    //     setSearchValue,
    //     setUsersIdsSelected,
    //   },
    // };
    // const { result } = renderHook(
    //   ({ usersIdsSelected, setSearchValue, setUsersIdsSelected }) =>
    //     useUsers(usersIdsSelected, setSearchValue, setUsersIdsSelected),
    //   initialPropsForUseUsers
    // );
    // const mockedUsers = Users.LARGE;
    // act(() => {
    //   result.current.handleDuplicateUsers();
    // });
    // console.log("result.current.users :", result.current.users);
    // expect(result.current.users).toHaveLength(1);
    // act(() => {
    //   result.current.handleDuplicateUsers();
    // });
    // expect(result.current.users).toHaveLength(2);
  });

  // test("Should setUsers undefined on fetch unknown user", async () => {
  //   const { result } = renderHook(useUsers);
  //   await act(async () => {
  //     await result.current.fetchUsers("skjgfhkdfjhgk");
  //   });
  //   expect(result.current.users).toBe(undefined);
  // });
  // test("Should show message API rate limit", async () => {
  //   const { result } = renderHook(useUsers);
  //   await act(async () => {
  //     await result.current.fetchUsers("skjgfhkdfjhgk");
  //   });
  //   expect(result.current.users).toBe(undefined);
  // });
});
