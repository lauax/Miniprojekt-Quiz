import { useEffect, useState } from "react";

interface Props {
  value: number;
  onchange: (selectedNumberValue: number) => void;
}
function Dropdown(props: Props) {
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
      <div className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {props.value ? `${props.value} Frågor` : "Välj antal frågor"}
        <i className={isOpen ? "fa fa-caret-up" : "fa fa-caret-down"}></i>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
