import { Icons } from "../../../../../../ts/constants";

export interface OptionIcon {
  className: string;
}

export const getIconsClassNames = (): OptionIcon[] => [
  {
    className: Icons.REGULAR_COPY,
  },
  {
    className: Icons.REGULAR_TRACH_CAN,
  },
];
