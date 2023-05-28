import React from "react";

interface Props {
  isOpen: boolean;
  options: number[];
  onOptionClick: (option: number) => void;
}

const AmmountMenu: React.FC<Props> = ({ isOpen, options, onOptionClick }) => {
  return (
    <ul className="dropdown-menu">
      {isOpen &&
        options.map((option) => (
          <li key={option} onClick={() => onOptionClick(option)}>
            {option}
          </li>
        ))}
    </ul>
  );
};

export default AmmountMenu;
