import { ChangeEvent, useEffect, useState } from "react";
import GithubUsers from "./GithubUsers/GithubUsers";
import SearchSection from "./SearchSection/SearchSection";
import TopBar from "./TopBar/TopBar";
import "./githubSearchPage.css";
import useDebounce from "../../../hooks/useDebounce";

function GitHubSearchPage() {
  const [users, setUsers] = useState<any[] | undefined>(undefined); //Define user Type
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [userSearched, setUserSearched] = useState<string>("");
  const [usersSelected, setUsersSelected] = useState<any>([]);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);

  const handleClick = () => {
    setIsEditMode(!isEditMode);
  };

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

  const debouncedValue = useDebounce(userSearched);

  const checkIfAllSelected = () => {
    setIsAllChecked(usersSelected.length === users?.length);
  };

  useEffect(() => {
    checkIfAllSelected();
  }, [usersSelected]);

  const getUsers = async () => {
    const datas = await fetch(
      `https://api.github.com/search/users?q=${debouncedValue}`,
      {
        method: "GET",
      }
    );
    const foundedUsers = await datas.json();
    setUsers(foundedUsers.items);
  };

  useEffect(() => {
    getUsers();
  }, [debouncedValue]);

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

  const onDuplicate = () => {
    if (!users) return;
    const duplicateItems = usersSelected.map((userSelected: any) => {
      return { ...userSelected, id: crypto.randomUUID() };
    });

    setUsers([...users, ...duplicateItems]);
    setUsersSelected([...usersSelected, ...duplicateItems]);
  };

  function getDifferenceBetweenArrays(users: any[], usersSelected: any[]) {
    return users.filter((user) => {
      return !usersSelected.some((userSelected) => {
        return user.id === userSelected.id;
      });
    });
  }

  const onDelete = () => {
    if (!users) return;
    const newArray = getDifferenceBetweenArrays(users, usersSelected);
    setUsers(newArray);
  };

  return (
    <div className="container">
      <TopBar onClick={handleClick} isEditMode={isEditMode} />
      <SearchSection
        isEditMode={isEditMode}
        handleChange={handleChange}
        onCheckAll={onCheckAll}
        isChecked={isAllChecked}
        value={userSearched}
        onDuplicate={onDuplicate}
        onDelete={onDelete}
      />

      <GithubUsers
        isEditMode={isEditMode}
        users={users}
        usersSelected={usersSelected}
        onCheckOne={onCheckOne}
      />
    </div>
  );
}

export default GitHubSearchPage;
