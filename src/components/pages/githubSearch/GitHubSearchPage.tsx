import { ChangeEvent, useEffect, useState } from "react";
import GithubUsers from "./GithubUsers/GithubUsers";
import SearchSection from "./SearchSection/SearchSection";
import TopBar from "./TopBar/TopBar";
import "./githubSearchPage.css";

function GitHubSearchPage() {
  const [users, setUsers] = useState<any[] | undefined>(undefined); //Define user Type
  const [user, setUser] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;
    setUser(value);
  };

  const getUsers = async () => {
    const datas = await fetch("https://api.github.com/search/users?q=Tom", {
      method: "GET",
    });
    const foundedUsers = await datas.json();
    setUsers(foundedUsers.items);
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log("users :", users);
  return (
    <div className="container">
      <TopBar />
      <SearchSection handleChange={handleChange} />
      <GithubUsers users={users} />
    </div>
  );
}

export default GitHubSearchPage;
