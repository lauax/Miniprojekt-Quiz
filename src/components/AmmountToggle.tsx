import React from "react";

interface Props {
  isOpen: boolean;
  onClick: () => void;
  value: number;
}

const AmmountToggle: React.FC<Props> = ({ isOpen, onClick, value }) => {
  return (
    <div className="dropdown-toggle" onClick={onClick}>
      {value ? `${value} Frågor` : "Välj antal frågor"}
      <i className={isOpen ? "fa fa-caret-up" : "fa fa-caret-down"}></i>
    </div>
  );
};

export default AmmountToggle;
