import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { OurStyle } from "./Home.style";

function Quiz() {
  
  return (
    <div>
    <Aside>
      <Link to="/">Startpage</Link>
      <Link to="quiz">Quizgame</Link>
      <Link to="about">About...</Link>
    </Aside>
    <Outlet />
    <OurStyle />
  </div>
  );
}

export default Quiz;

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