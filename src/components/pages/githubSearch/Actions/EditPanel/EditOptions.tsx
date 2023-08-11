import { useContext } from "react";
import { SearchContext } from "../../../../../context/SearchContext";
import Icon from "../../../../reusable-ui/Icon";

import { getActionsIcons } from "./actionsIconsConfig";

function EditOptions() {
  const { handleDelete, handleDuplicate } = useContext(SearchContext);
  const actionsIcons = getActionsIcons(handleDuplicate, handleDelete);

  return (
    <div data-testid="icons" className="actions">
      {actionsIcons.map(({ className, onClick }) => (
        <Icon key={className} className={className} onClick={onClick} />
      ))}
    </div>
  );
}

export default EditOptions;
