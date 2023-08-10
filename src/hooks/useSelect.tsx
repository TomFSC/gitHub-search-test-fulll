import { useState } from "react";
import { Id, User } from "../types/users";
import { filterById } from "../components/pages/githubSearch/helpers/array";
// 1 Seul state
//2 comportement handleCheckOneUser, handleCheckAllUsers
// utiliser handleCheckOne ds handleCheckAllUsers

export const useSelect = (users: User[]) => {
  const [usersSelected, setUsersSelected] = useState<Id[]>([]);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);

  const handleToggleAllUsers = () => {
    if (!users) return;
    if (isAllChecked) {
      setUsersSelected([]);
      setIsAllChecked(false);
      return;
    }
    const newArray = users.map((user) => {
      return user.id;
    });
    setUsersSelected(newArray);
    setIsAllChecked(!isAllChecked);
  };

  // const checkIfAllUsersSelected = () => {
  //   return usersSelected.length === users?.length && users?.length !== 0;
  // };

  const handleCheckOne = (id: Id) => {
    if (usersSelected.includes(id)) {
      const newUsersSelected = filterById(usersSelected, id);

      setUsersSelected(newUsersSelected);
      return;
    }
    setUsersSelected([...usersSelected, id]);
    setIsAllChecked(false);
  };

  return {
    isAllChecked,
    setIsAllChecked,
    handleToggleAllUsers,
    // checkIfAllUsersSelected,
    handleCheckOne,
    usersSelected,
    setUsersSelected,
  };
};
