import { MouseEventHandler } from "react";

export interface ActionIcon {
  className: string;
  onClick: MouseEventHandler;
}

export const getActionsIcons = (
  onDuplicate: MouseEventHandler,
  onDelete: MouseEventHandler
): ActionIcon[] => [
  {
    className: "fa-regular fa-copy",
    onClick: onDuplicate,
  },
  {
    className: "fa-regular fa-trash-can",
    onClick: onDelete,
  },
];
