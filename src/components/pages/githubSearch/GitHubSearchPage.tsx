import { ChangeEvent, useEffect, useState } from "react";
import GithubUsers from "./GithubUsers/GithubUsers";
import SearchSection from "./SearchSection/SearchSection";
import TopBar from "./TopBar/TopBar";
import "./githubSearchPage.css";

function GitHubSearchPage() {
  const [users, setUsers] = useState<any[] | undefined>(undefined); //Define user Type
  const [userSearched, setUserSearched] = useState<string>("");
  const [usersSelected, setUsersSelected] = useState<any>([]);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;
    setUserSearched(value);
  };

  const onCheckAll = () => {
    if (isAllChecked) {
      setUsersSelected([]);
      setIsAllChecked(!isAllChecked);
      return;
    }
    setUsersSelected(users);
    setIsAllChecked(!isAllChecked);
  };

  const checkIfAllSelected = () => {
    setIsAllChecked(usersSelected.length === users?.length);
  };

  useEffect(() => {
    checkIfAllSelected();
  }, [usersSelected]);

  const onCheckOne = async (user: any) => {
    if (usersSelected.includes(user)) {
      const newArray = usersSelected.filter(
        (userSelected: any) => userSelected !== user
      );
      setUsersSelected(newArray);
      setIsAllChecked(false);
      return;
    }
    setUsersSelected([...usersSelected, user]);
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

  return (
    <div className="container">
      <TopBar />
      <SearchSection
        handleChange={handleChange}
        onCheckAll={onCheckAll}
        isChecked={isAllChecked}
        value={userSearched}
      />
      <GithubUsers
        users={users}
        usersSelected={usersSelected}
        onCheckOne={onCheckOne}
      />
    </div>
  );
}

export default GitHubSearchPage;
