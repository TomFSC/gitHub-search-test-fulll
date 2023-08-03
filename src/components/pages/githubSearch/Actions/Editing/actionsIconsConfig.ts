import { MouseEventHandler } from "react";

export const getActionsIcons = (
  onDuplicate: MouseEventHandler,
  onDelete: MouseEventHandler
) => [
  {
    className: "fa-regular fa-copy",
    onClick: onDuplicate,
  },
  {
    className: "fa-regular fa-trash-can",
    onClick: onDelete,
  },
];
