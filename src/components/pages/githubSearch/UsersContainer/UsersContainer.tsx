import { useContext } from "react";
import { SearchContext } from "../../../../context/SearchContext";
import UnknownUsers from "./UnknownUsers/UnknownUsers";
import Users from "./Users/Users";

import "./usersContainer.css";

function UsersContainer() {
  const { users } = useContext(SearchContext);

  return (
    <div data-testid="users-container" className="users-container">
      {users === undefined ? <UnknownUsers /> : <Users />}
    </div>
  );
}

export default UsersContainer;
