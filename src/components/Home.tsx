import { useState } from "react";
import { Difficulty, fetchQuizQuestions } from "../API";
import { OurStyle } from "../Home.style";
import LoadingSpinner from "./LoadingSpinner";
import Quiz from "./Quiz";

const Home: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [questionsLoaded, setQuestionsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const startTrivia = async () => {
    setGameStarted(true);
    setIsLoading(true);
    await fetchQuizData();
    setIsLoading(false);
  };

  const fetchQuizData = async () => {
    const newQuestions = await fetchQuizQuestions(10, Difficulty.MEDIUM);
    setQuestionsLoaded(true);
    // Uppdatera statet
  };

  return (
    <>
      <OurStyle />

      {gameStarted && questionsLoaded ? (
        <Quiz />
      ) : (
        <>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <button className="start" onClick={startTrivia}>
              Start
            </button>
          )}
        </>
      )}
    </>
  );
};

export default Home;
