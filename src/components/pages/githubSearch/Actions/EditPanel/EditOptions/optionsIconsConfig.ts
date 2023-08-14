import { MouseEventHandler } from "react";

export interface OptionIcon {
  className: string;
  onClick: MouseEventHandler;
}

export const getOptionsIcons = (
  onDuplicate: MouseEventHandler,
  onDelete: MouseEventHandler
): OptionIcon[] => [
  {
    className: "fa-regular fa-copy",
    onClick: onDuplicate,
  },
  {
    className: "fa-regular fa-trash-can",
    onClick: onDelete,
  },
];
