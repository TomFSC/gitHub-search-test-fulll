import { useContext } from "react";
import { SearchContext } from "../../../../../context/SearchContext";
import Icon from "../../../../reusable-ui/Icon";

import { ClassNames } from "../../../../../ts/constants";
import { getOptionsIcons } from "./optionsIconsConfig";

function EditOptions() {
  const { handleDelete, handleDuplicate } = useContext(SearchContext);
  const editOptionsIcons = getOptionsIcons(handleDuplicate, handleDelete);

  return (
    <div className={ClassNames.EDIT_OPTIONS}>
      {editOptionsIcons.map(({ className, onClick }) => (
        <Icon key={className} className={className} onClick={onClick} />
      ))}
    </div>
  );
}

export default EditOptions;
