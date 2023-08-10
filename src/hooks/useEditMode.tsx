import { useState } from "react";
import { Id } from "../types/users";
import { useUsers } from "./useUsers";
import { filterById } from "../components/pages/githubSearch/helpers/array";

export const useEditMode = () => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  // const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  // const [usersSelected, setUsersSelected] = useState<Id[]>([]);
  // const { users } = useUsers();

  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  // const onCheckAll = () => {
  //   if (!users) return;
  //   if (isAllChecked) {
  //     setUsersSelected([]);
  //     setIsAllChecked(!isAllChecked);
  //     return;
  //   }
  //   const newArray = users.map((user) => {
  //     return user.id;
  //   });
  //   setUsersSelected(newArray);
  //   setIsAllChecked(!isAllChecked);
  // };

  // const checkIfAllUsersSelected = () => {
  //   setIsAllChecked(
  //     usersSelected.length === users?.length && users?.length !== 0
  //   );
  // };

  // const onCheckOne = (id: Id) => {
  //   if (usersSelected.includes(id)) {
  //     const newUsersSelected = filterById(usersSelected, id);

  //     setUsersSelected(newUsersSelected);
  //     return;
  //   }
  //   setUsersSelected([...usersSelected, id]);
  //   setIsAllChecked(false);
  // };

  return {
    isEditMode,
    setIsEditMode,
    // checkIfAllUsersSelected,
    handleEditMode,
    // onCheckAll,
    // onCheckOne,
    // usersSelected,
    // setUsersSelected,
    // isAllChecked,
    // setIsAllChecked,
  };
};
