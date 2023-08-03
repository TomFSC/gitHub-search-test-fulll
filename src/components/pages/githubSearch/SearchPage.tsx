import { ChangeEvent, useEffect, useState } from "react";
import Header from "./Header/Header";
import "./searchPage.css";
import useDebounce from "../../../hooks/useDebounce";
import Users from "./Users/Users";
import Actions from "./Actions/Actions";

export type User = {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  score: number;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
};

function SearchPage() {
  const [users, setUsers] = useState<User[] | undefined>(undefined); //Define user Type
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
    if (!users) return;
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
    if (userSearched === "") {
      setUsers(undefined);
      return;
    }
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

  const onCheckOne = async (user: User) => {
    if (usersSelected.includes(user)) {
      const newArray = usersSelected.filter(
        (userSelected: User) => userSelected !== user
      );
      setUsersSelected(newArray);
      setIsAllChecked(false);
      return;
    }
    setUsersSelected([...usersSelected, user]);
  };

  const onDuplicate = () => {
    if (!users) return;
    const duplicateItems = usersSelected.map((userSelected: User) => {
      return { ...userSelected, id: crypto.randomUUID() };
    });

    setUsers([...users, ...duplicateItems]);
    setUsersSelected([...usersSelected, ...duplicateItems]);
  };

  function getDifferenceBetweenArrays(users: User[], usersSelected: User[]) {
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
      <Header onClick={handleClick} isEditMode={isEditMode} />
      <Actions
        isEditMode={isEditMode}
        nbOfSelectedUsers={usersSelected?.length}
        handleChange={handleChange}
        onCheckAll={onCheckAll}
        isChecked={isAllChecked}
        value={userSearched}
        onDuplicate={onDuplicate}
        onDelete={onDelete}
      />

      <Users
        isEditMode={isEditMode}
        users={users}
        usersSelected={usersSelected}
        onCheckOne={onCheckOne}
      />
    </div>
  );
}

export default SearchPage;
