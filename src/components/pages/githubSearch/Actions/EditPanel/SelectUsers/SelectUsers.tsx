import React, { useContext } from "react";
import Checkbox from "../../../../../reusable-ui/Checkbox";
import SelectedUsersCount from "./SelectedUsersCount";
import { SearchContext } from "../../../../../../context/SearchContext";

function SelectUsers() {
  const { users, usersIdsSelected, handleToggleAllUsers } =
    useContext(SearchContext);

  const areAllUSersChecked =
    usersIdsSelected.length === users?.length && users?.length !== 0;

  return (
    <div className="check-all">
      <Checkbox onChange={handleToggleAllUsers} checked={areAllUSersChecked} />
      <SelectedUsersCount />
    </div>
  );
}

export default SelectUsers;
