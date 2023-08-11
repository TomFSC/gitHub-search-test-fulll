interface TitleProps {
  label: string;
}

function Title({ label }: TitleProps) {
  return <h1>{label}</h1>;
}

export default Title;
