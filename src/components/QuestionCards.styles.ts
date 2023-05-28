import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: #f0e6ff;
  border-radius: 10px;
  border: 2px solid #663399;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.5 ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct ? "#8bc34a" : !correct && userClicked ? "#ff82b4" : "#8076a3"};
    border: 3px solid #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }

  @media screen and (max-width: 600px) {
    button {
      font-size: 0.7rem;
    }
  }
`;
