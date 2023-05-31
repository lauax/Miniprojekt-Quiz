import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import startTrivia from './Home';

function App() {
  return (
    <div>
      <Aside>
        <Link to="/" onClick={startTrivia}>Go Back</Link>
        <Link to="about">About...</Link>
        <Link to="socials">Sociala medier</Link>
      </Aside>
      <Outlet />
    </div>
  );
}

export default App;

const Aside = styled.aside`
  background-color: rgb(165, 37, 150);
  display: flex;
  flex-direction: column;
  width: 15%;
  background-color: #f1f1f1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  
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
    margin: auto;
    width: 90%;
    text-align: center; /* Align text to center */

    @media screen and (max-width: 1300px) {
      font-size: 1em; /* Decrease font size for smaller screens */
    }
  }

    @media screen and (max-width: 768px) {
      font-size: 0.5em; /* Decrease font size for smaller screens */
    }
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
