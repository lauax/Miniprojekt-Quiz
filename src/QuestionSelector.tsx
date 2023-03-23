import { useState } from 'react';
import Dropdown from './Dropdown';

function QuestionSelector() {
  const [questionCount, setQuestionCount] = useState(null);

  function handleQuestionCountChange(count) {
    setQuestionCount(count);
  }

  function handleStartQuiz() {
    
  }

  return (
    <div>
      <label>Select the number of questions:</label>
      <Dropdown
        options={[5, 10, 15, 20]}
        onOptionClick={handleQuestionCountChange}
      />
      {questionCount && (
        <button onClick={handleStartQuiz}>Start Quiz</button>
      )}
    </div>
  );
}

export default QuestionSelector;
