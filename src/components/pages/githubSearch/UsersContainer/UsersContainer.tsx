import { useContext } from "react";
import { SearchContext } from "../../../../context/SearchContext";
import EmptyUsers from "./EmptyUsers/EmptyUsers";
import Users from "./Users/Users";

import { ClassNames } from "../../../../ts/constants";
import "./usersContainer.css";

function UsersContainer() {
  const { users } = useContext(SearchContext);

  return (
    <div className={ClassNames.USERS_CONTAINER}>
      {users === undefined ? <EmptyUsers /> : <Users />}
    </div>
  );
}

export default UsersContainer;
