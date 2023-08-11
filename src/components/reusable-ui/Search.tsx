import { ChangeEventHandler } from "react";

interface SearchProps {
  onChange: ChangeEventHandler;
  value: string;
}

function Search({ onChange, value }: SearchProps) {
  return (
    <div data-testid="search-input" className="search-input">
      <input
        className="input-text"
        type="text"
        placeholder="Search for user"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Search;
