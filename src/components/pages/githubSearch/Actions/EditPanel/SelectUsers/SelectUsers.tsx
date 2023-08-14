import { useContext } from "react";
import { SearchContext } from "../../../../../../context/SearchContext";
import Checkbox from "../../../../../reusable-ui/Checkbox/Checkbox";
import SelectedUsersCount from "./SelectedUsersCount";

import { ClassNames } from "../../../../../../ts/constants";

function SelectUsers() {
  const { isEditMode, users, usersIdsSelected, handleToggleAllUsers } =
    useContext(SearchContext);

  const areAllUSersChecked =
    usersIdsSelected.length === users?.length && users?.length !== 0;

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
