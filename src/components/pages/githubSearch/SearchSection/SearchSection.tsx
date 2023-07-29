import { ChangeEventHandler, MouseEventHandler } from "react";
import "./searchSection.css";

interface SearchSectionProps {
  isEditMode: boolean;
  handleChange: ChangeEventHandler;
  onCheckAll: ChangeEventHandler;
  isChecked: boolean;
  value: string;
  onDuplicate?: MouseEventHandler;
  onDelete?: MouseEventHandler;
}

function SearchSection({
  isEditMode,
  handleChange,
  onCheckAll,
  isChecked,
  value,
  onDuplicate,
  onDelete,
}: SearchSectionProps) {
  return (
    <div className="search-section">
      <div className="input">
        <input
          type="text"
          placeholder="search for user"
          onChange={handleChange}
          value={value}
        />
      </div>
      {isEditMode && (
        <div className="editing">
          <input type="checkbox" onChange={onCheckAll} checked={isChecked} />
          <div className="actions">
            <span onClick={onDuplicate}>Duplicate</span>
            <span onClick={onDelete}>Delete</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchSection;
