import React, { useEffect, useState } from "react";
import { Difficulty, Question, fetchQuizQuestions } from "../API";
import { OurStyle } from "../Home.style";
import GameOver from "./GameOver";
import QuestionCard, { AnswerObject } from "./QuestionCard";

const Quiz: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  useEffect(() => {
    fetchQuizData();
  }, []);

  const fetchQuizData = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(10, Difficulty.EASY);

    //Spinner är igång för dekoration
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver && questions[number]) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if (correct) setScore((prev) => prev + 1);

      const AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswer((prev) => [...prev, AnswerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === 10) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  const restartGame = () => {
    setLoading(false);
    setQuestions([]);
    setNumber(0);
    setUserAnswer([]);
    setScore(0);
    setGameOver(false);
    fetchQuizData();
  };

  return (
    <>
      <OurStyle />

      <div>
        {loading || (!questions.length && <p>Loading Questions....</p>)}

        {!loading && questions.length > 0 && !gameOver && (
          <>
            <div>
              <p className="score">Score: {score}</p>
            </div>

            <QuestionCard
              questionNr={number + 1}
              totalQuestions={10}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswer ? userAnswer[number] : undefined}
              callback={checkAnswer}
            />
          </>
        )}

        {!gameOver && !loading && userAnswer.length === number + 1 && (
          <button className="next" onClick={nextQuestion}>
            Show next question
          </button>
        )}

        {gameOver && <GameOver score={score} restartGame={restartGame} />}
      </div>
    </>
  );
};

export default Quiz;
