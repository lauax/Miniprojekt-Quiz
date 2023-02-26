

import React, { useState } from 'react';
import { fetchQuizQuestions, QuestionsState } from './API';
//Components
import QuestionCard from './components/QuestionCard';
//Types
import { Difficulty } from './API';

type AnswerObject = {
  question:string;
  answer:string;
  correct:boolean;
  correctAnswer:string;
}

const TOTAL_QUESTIONS = 10;

const App = () => {
 
  

  const [loading, setloading] = useState (false);
  const [questions, setQuestions] = useState<QuestionsState[]> ([]);
  const [number, setNumber] = useState (0);
  const [userAnswer, setUserAnswer] = useState <AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

 


  const startTrivia = async () => { 
    setloading (true);
    setGameOver (false);

    const newQuestions = await fetchQuizQuestions (
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

//Use some sort of error handling if we get an error

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setNumber (0);
    setloading(false);

  

  };
  
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>{

  }

  const nextQuestion = () =>{

  }



  

  return (
    <div className="App">
     <h1>Quiz-app</h1>
     
      {gameOver || userAnswer.length === TOTAL_QUESTIONS ? (

      
     <button className='start' onClick={startTrivia}> Start </button>
      ) : null}
     
     {!gameOver ? <p className='score'> Score: </p> :null}
     
     {loading && <p>Loading Questions....</p> }

    {!loading&&!gameOver &&  (  
    
    
      <QuestionCard 
     questionNr={number +1}
     totalQuestions = {TOTAL_QUESTIONS}
     question = {questions[number].question}
     answers = {questions[number].answers}
     userAnswer = {userAnswer ? userAnswer[number]:undefined}
     callback = {checkAnswer}
     
     />
       )}
     <button className='next' onClick={nextQuestion}>Next question</button>
    </div>
  );
}

export default App
