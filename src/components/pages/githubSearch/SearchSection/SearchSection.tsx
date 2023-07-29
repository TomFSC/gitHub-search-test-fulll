import { ChangeEventHandler } from "react";
import "./searchSection.css";

interface SearchSectionProps {
  isEditMode: boolean;
  handleChange: ChangeEventHandler;
  onCheckAll: ChangeEventHandler;
  isChecked: boolean;
  value: string;
}

function SearchSection({
  isEditMode,
  handleChange,
  onCheckAll,
  isChecked,
  value,
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
            <span>Edit</span>
            <span>Delete</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchSection;
