import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { OurStyle } from "../Home.style";

const IconWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-left: 2rem;
  color: white;
`;
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
`;
const QuizContainer = styled.div`
  background-color: purple;
  color: white;
  padding: 20px;
  margin: 0;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 600px;
  text-align: center;
`;

function Socials() {
  return (
    <>
      <OurStyle />
      <CenteredContainer>
        <IconWrapper href="https://www.instagram.com/">
          <FontAwesomeIcon icon={faInstagram} className="i" size="2xl" />
        </IconWrapper>
        <IconWrapper href="https://twitter.com/">
          <FontAwesomeIcon icon={faTwitter} className="i" size="2xl" />
        </IconWrapper>
        <IconWrapper href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebook} className="i" size="2xl" />
        </IconWrapper>
      </CenteredContainer>
      <QuizContainer>
        <h1>Sociala medier</h1>
        <p>Då får gärna in och följa oss!</p>
      </QuizContainer>
    </>
  );
}
export default Socials;
