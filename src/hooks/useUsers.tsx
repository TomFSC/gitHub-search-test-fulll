import { useState } from "react";
import { User } from "../types/users";
import { getUsers } from "../api/gitHubUsers";

import { useSearch } from "./useSearch";

export const useUsers = () => {
  const [users, setUsers] = useState<User[] | undefined | []>([]);
  const [error, setError] = useState<null | string>(null);
  //const { usersSelected, setUsersSelected, setIsAllChecked } = useEditMode();
  const { setSearch } = useSearch();

  const fetchUsers = async (param: string) => {
    setError(null);
    if (param === "") {
      setUsers([]);
      return;
    }
    const response = await getUsers(param);
    if (response.message) {
      setError(response.message);
      setUsers([]);
      return;
    }
    if (response.items.length === 0) {
      setUsers(undefined);
      return;
    }
    setUsers(response.items);
  };

  // const onDuplicate = () => {
  //   if (!users) return;
  //   const duplicateItems = usersSelected.map((userSelected: Id) => {
  //     const user = findObjectById(users, userSelected);
  //     return { ...user, id: crypto.randomUUID() };
  //   });
  //   setUsers([...users, ...duplicateItems]);
  //   setIsAllChecked(false);
  // };

  // const onDelete = () => {
  //   if (!users) return;
  //   const newUsers = differenceBetweenArrays(users, usersSelected);
  //   if (newUsers.length === 0) setSearch("");
  //   setUsers(newUsers);
  //   setUsersSelected([]);
  //   setIsAllChecked(false);
  // };

  return {
    users,
    error,
    fetchUsers,
    setUsers,
    // onDuplicate,
    // onDelete,
  };
};
