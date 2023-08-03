import { ChangeEventHandler } from "react";
import "./search.css";

interface SearchProps {
  handleChange: ChangeEventHandler;
  value: string;
}

function Search({ handleChange, value }: SearchProps) {
  return (
    <div className="search-input">
      <input
        className="input-text"
        type="text"
        placeholder="Search for user"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}

export default Search;
