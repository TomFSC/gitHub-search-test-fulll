import { useContext } from "react";
import { SearchContext } from "../../../../../context/SearchContext";
import Checkbox from "../../../../reusable-ui/Checkbox";
import EditOptions from "./EditOptions";

import "./editPanel.css";

function EditPanel() {
  const { users, usersIdsSelected, handleToggleAllUsers } =
    useContext(SearchContext);

  const nbOfSelectedUsers = usersIdsSelected.length;
  const areAllUSersChecked =
    usersIdsSelected.length === users?.length && users?.length !== 0;

  return (
    <div data-testid="edit-panel" className="edit-panel">
      <div className="check-all">
        <Checkbox
          onChange={handleToggleAllUsers}
          checked={areAllUSersChecked}
        />
        <div className="selected-users-count">
          <span data-testid="count" className="count">
            {nbOfSelectedUsers}{" "}
            {nbOfSelectedUsers > 1 ? "elements selected" : "element selected"}
          </span>
        </div>
      </div>
      <EditOptions />
    </div>
  );
}

export default EditPanel;
