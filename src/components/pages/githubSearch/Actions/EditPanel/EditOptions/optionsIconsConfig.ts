import { Icons } from "../../../../../../ts/constants";

export interface OptionIcon {
  OptionIcon: string;
}

export const getIconsClassNames = (): OptionIcon[] => [
  {
    OptionIcon: Icons.REGULAR_COPY,
  },
  {
    OptionIcon: Icons.REGULAR_TRACH_CAN,
  },
];
