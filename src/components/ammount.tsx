import React, { useEffect, useState } from "react";
import AmmountMenu from "./AmmountMenu";
import AmmountToggle from "./AmmountToggle";

interface Props {
  value: number;
  onchange: (selectedNumberValue: number) => void;
}

const Ammount: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const options = [3, 5, 7, 10];

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (event.target.closest(".dropdown") === null) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleOptionClick(option: number) {
    props.onchange(option);
    setIsOpen(false);
  }

  return (
    <div className="dropdown">
      <AmmountToggle
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        value={props.value}
      />
      <AmmountMenu
        isOpen={isOpen}
        options={options}
        onOptionClick={handleOptionClick}
      />
    </div>
  );
};

export default Ammount;
