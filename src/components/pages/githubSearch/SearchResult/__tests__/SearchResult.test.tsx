import { render, screen } from "@testing-library/react";
import SearchResult from "../SearchResult";

const mockUsers = [
  {
    avatar_url: "https://avatars.githubusercontent.com/u/748?v=4",
    events_url: "https://api.github.com/users/tom/events{/privacy}",
    followers_url: "https://api.github.com/users/tom/followers",
    following_url: "https://api.github.com/users/tom/following{/other_user}",
    gists_url: "https://api.github.com/users/tom/gists{/gist_id}",
    gravatar_id: "",
    html_url: "https://github.com/tom",
    id: 748,
    login: "tom",
    node_id: "MDQ6VXNlcjc0OA==",
    organizations_url: "https://api.github.com/users/tom/orgs",
    received_events_url: "https://api.github.com/users/tom/received_events",
    repos_url: "https://api.github.com/users/tom/repos",
    score: 1,
    site_admin: false,
    starred_url: "https://api.github.com/users/tom/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/tom/subscriptions",
    type: "User",
    url: "https://api.github.com/users/tom",
  },
];

describe("SearchResult component", () => {
  test("Render with unknown user", () => {
    render(
      <SearchResult
        usersSelected={[]}
        onCheckOne={() => {}}
        users={undefined}
        isEditMode={false}
      />
    );
    const usersDisplay = screen.queryByTestId("users");
    expect(usersDisplay).toBeFalsy();
  });
});
