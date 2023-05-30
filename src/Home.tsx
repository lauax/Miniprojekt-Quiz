import React, { useEffect, useState } from "react";
import { Difficulty, Question, fetchQuizQuestions } from "./API";
import "./Home.css";
import { OurStyle } from "./Home.style";
import Dropdown from "./ammount";
import QuestionCard from "./components/QuestionCard";
import HappySadEmoji from "./happyAndSadEmoji.tsx";
import LoadingSpinner from "./loadingSpinner";
export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const Quiz = () => {
  const [selectedNumberValue, setSelectedNumberValue] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  const [hideSpinner, setHideSpinner] = useState(false);
  
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    setGameStarted(true);

    const newQuestions = await fetchQuizQuestions(
      selectedNumberValue,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showSpinner) {
      setHideSpinner(true);
    }
  }, [showSpinner]);

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver && questions[number]) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if (correct) setScore((prev) => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswer((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === selectedNumberValue) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <OurStyle />

      {!gameStarted ? (
        <Dropdown
          value={selectedNumberValue}
          onchange={setSelectedNumberValue}
        ></Dropdown>
      ) : null}

      <div>
        {gameOver || userAnswer.length === selectedNumberValue ? (
          <div>
            {hideSpinner && (
              <button
                className={`start ${
                  userAnswer.length !== selectedNumberValue ? "" : "hide"
                }`}
                onClick={startTrivia}
              >
                Start
              </button>
            )}

            <button
            
              className={`reset ${
                gameOver || selectedNumberValue === null ? "hide" : ""
              }`}
              onClick={startTrivia}
            >
              Restart
              
            </button>
            {!gameOver && selectedNumberValue !== null && (
            <HappySadEmoji score={score} />
          )}

          </div>
        ) : null}

        {!gameOver ? <p className="score"> Score: {score}</p> : null}

        {loading || (!questions.length && <p>Loading Questions....</p>)}

        {(selectedNumberValue !== 0 && showSpinner) ? <LoadingSpinner /> : null}

        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={selectedNumberValue}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswer ? userAnswer[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswer.length === number + 1 &&
        number !== selectedNumberValue - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Show next question
          </button>
        ) : null}
      </div>
    </>
  );
};

export default Quiz;
