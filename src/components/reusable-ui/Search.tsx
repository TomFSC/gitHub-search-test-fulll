import { ChangeEventHandler } from "react";

interface SearchProps {
  onChange: ChangeEventHandler;
  value: string;
  placeholder: string;
}

function Search({ onChange, value, placeholder }: SearchProps) {
  return (
    <div data-testid="search-input" className="search-input">
      <input
        className="input-text"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Search;
