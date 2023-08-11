import { useContext } from "react";
import { SearchContext } from "../../../../../../context/SearchContext";

function SelectedUsersCount() {
  const { usersIdsSelected } = useContext(SearchContext);
  const numberOfSelectedUsers = usersIdsSelected.length;
  const hasOnlyOneUserSelected = numberOfSelectedUsers < 2;

  return (
    <div className="selected-users-count">
      <span data-testid="count" className="count">
        {numberOfSelectedUsers}{" "}
        {hasOnlyOneUserSelected ? "element selected" : "elements selected"}
      </span>
    </div>
  );
}

export default SelectedUsersCount;
