import { useContext } from "react";
import { SearchContext } from "../../../../../context/SearchContext";
import Card from "./Card/Card";

import { ClassNames } from "../../../../../ts/constants";
import "./users.css";

function Users() {
  const { users, usersIdsSelected, isEditMode, handleCheckOneUser } =
    useContext(SearchContext);

  return (
    <div className={ClassNames.USERS}>
      {users?.map((user, index) => (
        <Card
          key={index}
          isEditMode={isEditMode}
          user={user}
          onChange={handleCheckOneUser}
          isChecked={usersIdsSelected.includes(user.id)}
        />
      ))}
    </div>
  );
}

export default Users;
