import { useContext } from "react";
import { SearchContext } from "../../../../../context/SearchContext";
import Icon from "../../../../reusable-ui/Icon";

import { getOptionsIcons } from "./optionsIconsConfig";

function EditOptions() {
  const { handleDelete, handleDuplicate } = useContext(SearchContext);
  const editOptionsIcons = getOptionsIcons(handleDuplicate, handleDelete);

  return (
    <div data-testid="icons" className="actions">
      {editOptionsIcons.map(({ className, onClick }) => (
        <Icon key={className} className={className} onClick={onClick} />
      ))}
    </div>
  );
}

export default EditOptions;
