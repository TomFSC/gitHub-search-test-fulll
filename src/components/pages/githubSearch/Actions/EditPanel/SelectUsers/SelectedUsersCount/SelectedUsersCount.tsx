import { useContext } from "react";
import { SearchContext } from "../../../../../../../context/SearchContext";

import {
  ClassNames,
  MULTIPLE_ELEMENTS_SELECTED,
  SINGLE_ELEMENT_SELECTED,
} from "../../../../../../../ts/constants";
import "./SelectedUsersCount.css";

function SelectedUsersCount() {
  const { usersIdsSelected } = useContext(SearchContext);
  const numberOfSelectedUsers = usersIdsSelected.length;
  const hasOnlyOneUserSelected = numberOfSelectedUsers < 2;

  return (
    <div className={ClassNames.SELECTED_USERS_COUNT}>
      <span className={ClassNames.COUNT}>
        {numberOfSelectedUsers}
        {hasOnlyOneUserSelected
          ? SINGLE_ELEMENT_SELECTED
          : MULTIPLE_ELEMENTS_SELECTED}
      </span>
    </div>
  );
}

export default SelectedUsersCount;
