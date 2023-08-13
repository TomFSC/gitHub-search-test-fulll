import { useState } from "react";
import { Id, User } from "../types/users";
import { removeById } from "../helpers/array";
import { EditMode } from "../ts/constants";

export const useEditPanel = () => {
  const [isEditMode, setIsEditMode] = useState<boolean>(EditMode.OFF);
  const [usersIdsSelected, setUsersIdsSelected] = useState<Id[]>([]);
  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleToggleAllUsers = (users: User[]) => {
    const areAllUSersChecked =
      usersIdsSelected.length === users?.length && users?.length !== 0;
    if (isEditMode === false) return;
    if (areAllUSersChecked) {
      setUsersIdsSelected([]);
      return;
    }
    const newUsersIdsSelected = users.map((user) => user.id);
    setUsersIdsSelected(newUsersIdsSelected);
  };

  const handleCheckOneUser = (id: Id) => {
    const isUserIdSelectedAllreadyInArray = usersIdsSelected.includes(id);

    if (isUserIdSelectedAllreadyInArray) {
      const newUsersSelected = removeById(usersIdsSelected, id);

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
