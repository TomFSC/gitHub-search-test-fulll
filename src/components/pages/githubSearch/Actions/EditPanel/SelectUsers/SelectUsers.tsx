import { useContext } from "react";
import { SearchContext } from "../../../../../../context/SearchContext";
import Checkbox from "../../../../../reusable-ui/Checkbox/Checkbox";
import SelectedUsersCount from "./SelectedUsersCount/SelectedUsersCount";

import { ClassNames } from "../../../../../../ts/constants";
import "./SelectUsers.css";
import { areAllUsersChecked } from "../../../../../../helpers/array";
import { User } from "../../../../../../types/users";

function SelectUsers() {
  const { isEditMode, users, usersIdsSelected, handleToggleAllUsers } =
    useContext(SearchContext);

  const areAllUSersChecked = areAllUsersChecked(
    users as User[],
    usersIdsSelected
  );

  const onChange = () => {
    handleToggleAllUsers(isEditMode, users);
  };

  return (
    <div className={ClassNames.SELECT_USERS}>
      <Checkbox onChange={onChange} checked={areAllUSersChecked} />
      <SelectedUsersCount />
    </div>
  );
}

export default SelectUsers;
