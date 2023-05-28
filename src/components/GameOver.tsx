import React from "react";

type GameOverProps = {
  score: number;
  restartGame: () => void;
};

const GameOver: React.FC<GameOverProps> = ({ score, restartGame }) => {
  return (
    <div>
      <h2>Game Over</h2>
      <p>Final Score: {score}</p>
      <button onClick={restartGame}>Restart Game</button>
    </div>
  );
};

export default GameOver;
