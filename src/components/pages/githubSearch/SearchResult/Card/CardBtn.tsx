interface CardBtnProps {
  className: string;
  label: string;
}

function CardBtn({ className, label }: CardBtnProps) {
  return <button className={className}>{label}</button>;
}

export default CardBtn;
