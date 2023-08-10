import { ChangeEvent, useState } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;
    setSearch(value);
  };

  return { search, setSearch, handleSearch };
};
