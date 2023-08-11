import { useState } from "react";
import { Id, User } from "../types/users";
import { filterById } from "../components/pages/githubSearch/helpers/array";

export const useEditPanel = (users: User[]) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [usersIdsSelected, setUsersIdsSelected] = useState<Id[]>([]);
  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const areAllUSersChecked =
    usersIdsSelected.length === users?.length && users?.length !== 0;

  const handleToggleAllUsers = () => {
    if (areAllUSersChecked) {
      setUsersIdsSelected([]);
      return;
    }
    const test = users.map((user) => {
      return user.id;
    });
    setUsersIdsSelected(test);
  };

  const handleCheckOneUser = (id: Id) => {
    if (usersIdsSelected.includes(id)) {
      const newUsersSelected = filterById(usersIdsSelected, id);

      setUsersIdsSelected(newUsersSelected);
      return;
    }
    setUsersIdsSelected([...usersIdsSelected, id]);
  };

  return {
    isEditMode,
    setIsEditMode,
    handleEditMode,
    handleToggleAllUsers,
    handleCheckOneUser,
    usersIdsSelected,
    setUsersIdsSelected,
  };
};
