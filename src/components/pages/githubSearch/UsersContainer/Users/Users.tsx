import { useContext } from "react";
import { SearchContext } from "../../../../../context/SearchContext";
import Card from "./Card/Card";

import { ClassNames } from "../../../../../ts/constants";
import "./users.css";
import { Id } from "../../../../../types/users";
import { isIncludesInArray } from "../../../../../helpers/array";

function Users() {
  const { users, usersIdsSelected, isEditMode, handleCheckOneUser } =
    useContext(SearchContext);

  return (
    <div className={ClassNames.USERS}>
      {users?.map((user, index) => {
        const isUsersIdsSelectedIncludesId = isIncludesInArray(
          usersIdsSelected,
          user.id as Id
        );
        return (
          <Card
            key={index}
            isEditMode={isEditMode}
            user={user}
            onChange={handleCheckOneUser}
            isChecked={isUsersIdsSelectedIncludesId}
          />
        );
      })}
    </div>
  );
}

export default Users;
