import React from "react";
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
};

const HappySadEmoji: React.FC<HappySadEmojiProps> = ({ score }) => {
  return (
    <EmojiContainer>
      {score > 5 ? (
        <StyledImage src={happyEmoji} alt="Happy Emoji" />
      ) : (
        <StyledImage src={sadEmoji} alt="Sad Emoji" />
      )}
    </EmojiContainer>
  );
};

export default HappySadEmoji;
