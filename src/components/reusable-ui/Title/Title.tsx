import { ClassNames } from "../../../ts/constants";
import "./Title.css";

interface TitleProps {
  label: string;
}

function Title({ label }: TitleProps) {
  return <h1 className={ClassNames.TITLE}>{label}</h1>;
}

export default Title;
