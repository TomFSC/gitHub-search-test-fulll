import { Dispatch, SetStateAction, useState } from "react";

import { findObjectById, removeByIds } from "../helpers/array";
import { Id, User } from "../types/users";

export const useUsers = (
  usersIdsSelected: Id[],
  setSearchValue: Dispatch<SetStateAction<string>>,
  setUsersIdsSelected: Dispatch<SetStateAction<Id[]>>
) => {
  const [users, setUsers] = useState<User[] | null | []>([]);

  const handleDuplicateUsers = () => {
    if (!users) return;
    const duplicateItems = usersIdsSelected.map((userSelected: Id) => {
      const user = findObjectById(users, userSelected);
      return { ...user, id: crypto.randomUUID() };
    });
    setUsers([...users, ...duplicateItems]);
  };

  const handleDeleteUsers = () => {
    if (!users) return;
    const newUsers = removeByIds(users, usersIdsSelected);
    if (newUsers.length === 0) setSearchValue("");
    setUsers(newUsers);
    setUsersIdsSelected([]);
  };

  return {
    users,
    setUsers,
    handleDuplicateUsers,
    handleDeleteUsers,
  };
};
