import { useContext } from "react";
import { SearchContext } from "../../../../../../context/SearchContext";
import Icon from "../../../../../reusable-ui/SharedIcon/Icon";

import { ClassNames, Icons } from "../../../../../../ts/constants";
import { getIconsClassNames } from "./optionsIconsConfig";
import "./EditOptions.css";

function EditOptions() {
  const { usersIdsSelected, handleDeleteUsers, handleDuplicateUsers } =
    useContext(SearchContext);
  const editOptionsIcons = getIconsClassNames();

  return (
    <div className={ClassNames.EDIT_OPTIONS}>
      {editOptionsIcons.map(({ className }) => {
        const hasDeleteIcon = className === Icons.REGULAR_TRACH_CAN;
        return (
          <Icon
            key={className}
            className={className}
            onClick={() => {
              hasDeleteIcon
                ? handleDeleteUsers(usersIdsSelected)
                : handleDuplicateUsers(usersIdsSelected);
            }}
          />
        );
      })}
    </div>
  );
}

export default EditOptions;
