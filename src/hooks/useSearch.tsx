import { ChangeEvent, useState } from "react";
import { EMPTY_STRING } from "../ts/constants";

export const useSearch = (defaultState: string = EMPTY_STRING) => {
  const [searchValue, setSearchValue] = useState<string>(defaultState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;
    setSearchValue(value);
  };

  const handleClearSearchValue = () => {
    setSearchValue(EMPTY_STRING);
  };

  return { searchValue, handleChange, handleClearSearchValue };
};
