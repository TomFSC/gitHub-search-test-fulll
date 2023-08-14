import { ChangeEvent, useState } from "react";

export const useSearch = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;
    setSearchValue(value);
  };

  const handleClearSearchValue = () => {
    setSearchValue("");
  };

  return { searchValue, handleChange, handleClearSearchValue };
};
