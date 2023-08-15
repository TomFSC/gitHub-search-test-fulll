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
      {editOptionsIcons.map(({ OptionIcon }) => {
        const hasDeleteIcon = OptionIcon === Icons.REGULAR_TRACH_CAN;
        return (
          <Icon
            key={OptionIcon}
            className={OptionIcon}
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
