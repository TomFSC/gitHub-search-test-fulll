import { useContext } from "react";
import { SearchContext } from "../../../../../context/SearchContext";
import Card from "./Card/Card";

import "./users.css";

function Users() {
  const { users, usersIdsSelected, isEditMode, handleCheckOneUser } =
    useContext(SearchContext);

  return (
    <div data-testid="users" className="users">
      {users?.map((user, index) => (
        <Card
          data-testid="card"
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
