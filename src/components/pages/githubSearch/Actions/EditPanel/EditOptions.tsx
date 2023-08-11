import { ActionIcon } from "./actionsIconsConfig";

interface EditOptionsProps {
  actionsIcons: ActionIcon[];
}

function EditOptions({ actionsIcons }: EditOptionsProps) {
  return (
    <div data-testid="icons" className="actions">
      {actionsIcons.map(({ className, onClick }) => (
        <span key={className} onClick={onClick}>
          <i className={className}></i>
        </span>
      ))}
    </div>
  );
}

export default EditOptions;
