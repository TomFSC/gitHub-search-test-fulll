import { ChangeEventHandler, MouseEventHandler } from "react";
import Icon from "./Icon";
import { Icons } from "../../ts/constants";

interface SearchProps {
  onChange: ChangeEventHandler;
  onClick: MouseEventHandler;
  value: string;
  placeholder: string;
  className: string;
  hasIcon: boolean;
}

function Search({
  onChange,
  onClick,
  value,
  placeholder,
  className,
  hasIcon,
}: SearchProps) {
  return (
    <div className={className}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {hasIcon && (
        <Icon className={Icons.SOLID_CIRCLE_XMARK} onClick={onClick} />
      )}
    </div>
  );
}

export default Search;
