import React from "react";

interface IconsProps {
  actionsIcons: any[];
}

function Icons({ actionsIcons }: IconsProps) {
  return (
    <div className="actions">
      {actionsIcons.map(({ className, onClick }) => (
        <span key={className} onClick={onClick}>
          <i className={className}></i>
        </span>
      ))}
    </div>
  );
}

export default Icons;
