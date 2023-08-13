import { ChangeEventHandler } from "react";

interface SearchProps {
  onChange: ChangeEventHandler;
  value: string;
  placeholder: string;
  className: string;
}

function Search({ onChange, value, placeholder, className }: SearchProps) {
  return (
    <div className={className}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Search;
