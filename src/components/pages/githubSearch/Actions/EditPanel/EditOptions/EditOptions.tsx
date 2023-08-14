import { useContext } from "react";
import { SearchContext } from "../../../../../../context/SearchContext";
import Icon from "../../../../../reusable-ui/Icon";

import { ClassNames } from "../../../../../../ts/constants";
import { getOptionsIcons } from "./optionsIconsConfig";
import "./EditOptions.css";

function EditOptions() {
  const { handleDeleteUsers, handleDuplicateUsers } = useContext(SearchContext);
  const editOptionsIcons = getOptionsIcons(
    handleDuplicateUsers,
    handleDeleteUsers
  );

  return (
    <div className={ClassNames.EDIT_OPTIONS}>
      {editOptionsIcons.map(({ className, onClick }) => (
        <Icon key={className} className={className} onClick={onClick} />
      ))}
    </div>
  );
}

export default EditOptions;
