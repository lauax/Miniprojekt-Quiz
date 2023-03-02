import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

import './App.css';

import React, { useState } from 'react';
import { fetchQuizQuestions, Question } from './API';
//Components
import QuestionCard from './components/QuestionCard';
//Types
import { Difficulty } from './API';
//Style
import { OurStyle } from './App.style';


export type AnswerObject = {
  question:string;
  answer:string;
  correct:boolean;
  correctAnswer:string;
}

//HUR VISAR VI ALLA FRÅGOR PÅ SLUTET: DEN SISTA SIDAN

const TOTAL_QUESTIONS = 10;

const App = () => {


 //All out types for the states
  const [loading, setloading] = useState(true);
  const [questions, setQuestions] = useState<Question[]> ([]);
  const [number, setNumber] = useState (0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => { 
    setloading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions (
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    console.log(newQuestions);

//Use some sort of error handling if we get an error

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setNumber (0);
    setloading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>{
    if (!gameOver){
      //Svar från användaren
      const answer = e.currentTarget.value
      //cchecka om svaret är umber
      const correct = questions[number].correct_answer === answer;
      //Lägg till poän om svaret är rätt
      if (correct) setScore(prev => prev +1);
      //Spara svar i array för svar av användaren
      const AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer:questions[number].correct_answer,

      };
      setUserAnswer((prev) => [...prev,AnswerObject]);
        }

  }

  const nextQuestion = () =>{
    //Svara på frågan såvida det inte är den sista
    const nextQuestion = number +1;

    if (nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
    }else{
      setNumber(nextQuestion)
    }

    };



    

    function App() {
      return (
        
    <> 
    <OurStyle /> 
    <div className='restartGame'>


    <Aside>
        <Link to="/">Startpage</Link>
        <Link to="quiz">Quizgame</Link>
        <Link to="about">About...</Link>
    </Aside>
      <Outlet />


  

     <h1></h1> 
     
      {gameOver || userAnswer.length === TOTAL_QUESTIONS ? (

      
     <button className='start' onClick={startTrivia}> Start </button>
      ) : null}
     
     {!gameOver ? <p className='score'> Score: {score}</p> :null}
     
     {loading || !questions.length && <p>Loading Questions....</p> }

    {!loading&&!gameOver &&  (  
    
   
      <QuestionCard 
     questionNr={number + 1}
     totalQuestions = {TOTAL_QUESTIONS}
     question = {questions[number].question}
     answers = {questions[number].answers}
     userAnswer = {userAnswer ? userAnswer[number]:undefined}
     callback = {checkAnswer}
     
     />
     
       )}
       {!gameOver && !loading && userAnswer.length === number +1 && number !== TOTAL_QUESTIONS-1?(

         <button className='next' onClick={nextQuestion}>Show next question</button>
       ) :null}
       </div>
       </>
  );
       };
    



       
const Aside = styled.aside`
  background-color: rgb(165, 37, 150);
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow-y: auto;
         
  && a {
    display: block;
    padding: 12px;
    text-decoration: none;
    color: #333;
    transition: background-color 0.2s ease;
    background-color: rgb(165, 37, 150);
    background-color: rgb(165, 37, 150);
    color: #fff;
    border: 2px solid #f9f9f9;
    border-radius: 40px;
    font-size: 1.5em;
    padding: 15px 25px;
    margin: auto; /* This centers the button horizontally */
  }

  && a:hover {
    background-color: #f9f9f9;
    color: #f5c035;
    text-shadow: 0 0 20px #f5c035, 0 0 30px #f5c035, 0 0 40px #f5c035,
      0 0 70px #f5c035;
    box-shadow: 0 0 20px #f5c035, 0 0 30px #f5c035, 0 0 40px #f5c035,
      0 0 70px #f5c035;
  }
`;
}
