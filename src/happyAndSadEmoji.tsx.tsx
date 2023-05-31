import React, { useEffect, useState } from "react";
import styled from "styled-components";
import sadEmoji from "./images/1f625.jpg";
import happyEmoji from "./images/263a.jpg";

const EmojiContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
`;

type HappySadEmojiProps = {
  score: number;
  totalQuestions: number;
};

const HappySadEmoji: React.FC<HappySadEmojiProps> = ({
  score,
  totalQuestions
}) => {
  const [requiredScore, setRequiredScore] = useState<number | undefined>(undefined);
  const requiredScoreValue = requiredScore as number; // Extract the number value

  useEffect(() => {
    setRequiredScore(totalQuestions / 2);
  }, [totalQuestions]);

  if (requiredScore === undefined) {
    return null; // Handle the case when the required score is not yet calculated
  }

  return (
    <EmojiContainer>
      {score >= requiredScoreValue ? (
        <StyledImage src={happyEmoji} alt="Happy Emoji" />
      ) : (
        <StyledImage src={sadEmoji} alt="Sad Emoji" />
      )}
    </EmojiContainer>
  );
};
export default HappySadEmoji;