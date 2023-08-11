import { ChangeEvent, useState } from "react";

export const useSearch = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;
    setSearchValue(value);
  };

  return { searchValue, setSearchValue, handleSearch };
};
