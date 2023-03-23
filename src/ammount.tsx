import { useEffect, useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNumberValue, setSelectedNumberValue] = useState(Number);
  const [options]= useState([3, 5, 7, 10]);

  useEffect(() => {
    function handleClickOutside(event:any) {
      if (event.target.closest('.dropdown') === null) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  async function fetchQuizQuestions(selectedNumberValue:number, difficulty:string) {
    const endpoint = `https://opentdb.com/api.php?amount=${selectedNumberValue}&difficulty=${difficulty}&type=multiple`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.results;
  }

  function handleOptionClick(option:number) {
    setSelectedNumberValue(option);
    setIsOpen(false);
  }


  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {selectedNumberValue || 'Select an option'}
        <i className={isOpen ? 'fa fa-caret-up' : 'fa fa-caret-down'}></i>
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
