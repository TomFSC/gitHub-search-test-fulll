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

  return (
    <div className={ClassNames.SELECT_USERS}>
      <Checkbox
        onChange={() => handleToggleAllUsers(isEditMode, users)}
        checked={areAllUSersChecked}
      />
      <SelectedUsersCount />
    </div>
  );
}

export default SelectUsers;
