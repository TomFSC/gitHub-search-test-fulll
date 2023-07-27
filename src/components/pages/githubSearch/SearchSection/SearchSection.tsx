import { ChangeEventHandler } from "react";
import "./searchSection.css";

interface SearchSectionProps {
  handleChange: ChangeEventHandler;
}

function SearchSection({ handleChange }: SearchSectionProps) {
  return (
    <div className="search-section">
      <div className="input">
        <input
          type="text"
          placeholder="search for user"
          onChange={handleChange}
        />
      </div>
      <div className="editing">
        <input type="checkbox" />
        <div className="actions">
          <span>Edit</span>
          <span>Delete</span>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
