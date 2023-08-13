import { useState } from "react";

import { EditMode } from "../ts/constants";

export const useEditPanel = () => {
  const [isEditMode, setIsEditMode] = useState<boolean>(EditMode.OFF);

  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return {
    isEditMode,
    setIsEditMode,
    handleEditMode,
  };
};
