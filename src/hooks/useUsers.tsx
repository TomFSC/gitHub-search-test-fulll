import { Dispatch, SetStateAction, useState } from "react";

import { findObjectById, removeByIds } from "../helpers/array";
import { Id, User } from "../types/users";

export const useUsers = (
  usersIdsSelected: Id[], //remove and pass to event handlers parameters
  setSearchValue: Dispatch<SetStateAction<string>>,
  setUsersIdsSelected: Dispatch<SetStateAction<Id[]>>
) => {
  const [users, setUsers] = useState<User[] | null | []>([]);

  const handleDuplicateUsers = () => {
    if (!users) return;
    //duplicatedItems
    const duplicateItems = usersIdsSelected.map((userSelected: Id) => {
      const user = findObjectById(users, userSelected);
      return { ...user, id: crypto.randomUUID() };
    });
    setUsers([...users, ...duplicateItems]);
  };

  const handleDeleteUsers = () => {
    //maybe delete condition
    if (!users) return;
    const newUsers = removeByIds(users, usersIdsSelected);
    //use isEmpty & handleClearSearchValue
    if (newUsers.length === 0) setSearchValue("");
    setUsers(newUsers);
    //resetUsersIdsSelected
    setUsersIdsSelected([]);
  };

  return {
    users,
    setUsers,
    handleDuplicateUsers,
    handleDeleteUsers,
  };
};
