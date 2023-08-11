import Icon from "../../../../reusable-ui/Icon";
import { ActionIcon } from "./actionsIconsConfig";

interface EditOptionsProps {
  actionsIcons: ActionIcon[];
}

function EditOptions({ actionsIcons }: EditOptionsProps) {
  return (
    <div data-testid="icons" className="actions">
      {actionsIcons.map(({ className, onClick }) => (
        <Icon key={className} className={className} onClick={onClick} />
      ))}
    </div>
  );
}

export default EditOptions;
