import { useState } from "react";

import { EditMode } from "../ts/constants";

export const useEditPanel = (defaultState: boolean = EditMode.OFF) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(defaultState);

  const handleToggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return {
    isEditMode,
    setIsEditMode,
    handleToggleEditMode,
  };
};
