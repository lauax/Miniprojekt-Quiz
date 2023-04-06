import styled from "styled-components";
import { OurStyle } from "./Home.style";

const QuizContainer = styled.div`
  background-color: purple;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 600px;
  margin: auto;
  margin-top 8rem;
`;

function Quiz() {
  return (
    <>
    <OurStyle />
    <QuizContainer>
      <h1>Quiz Game</h1>
      <p>
        Test your knowledge with our quiz game! Answer a series of questions on
        a variety of topics and see how many you can get right.
      </p>
    </QuizContainer>

    </>
  );
}

export default Quiz;
