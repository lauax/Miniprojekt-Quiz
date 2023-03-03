import { createGlobalStyle } from 'styled-components';
import Image from './images/hello.jpeg';

export const OurStyle = createGlobalStyle`
  html {
    height: 100%;
    
  }

  .hide {
    display: none !important; 
  }
 
*{
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.2rem;
}
  
  body {
    background-image: url(${Image});
    margin: 0;
    padding: 0;
    display:flex !important;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    background-size: 90% 100%;
    background-repeat: no-repeat;
    background-position: center right;
    
  }
  h1{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    background-size: 100%;
    background-clip:text;
    --webkit-background-clip:text;
    --webkit-text-fill-color: transparent;
    --moz-background-clip: text;
    --moz-text-fill-color: transparent;
    filter:drop-shadow(2px 2px #0085a3);
    font-size: 80px;
    text-align: center;
    margin: 20px;
    

}

button.start {
    background-color: rgb(165, 37, 150);
    color: #fff;
    border: 2px solid #f9f9f9;
    border-radius: 40px;
    font-size: 1.5em;
    padding: 15px 25px;
    margin: auto; /* This centers the button horizontally */
    position: absolute;
    top: 50%; /* This centers the button vertically */
    left: 50%;
    transform: translate(-50%, -50%);
    display:block;
    text-align: center;
    text-shadow: 0 0 10px #fff;
    box-shadow: 0 0 10px #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  
  button.reset {
    background-color: rgb(165, 37, 150);
    color: #fff;
    border: 2px solid #f9f9f9;
    border-radius: 40px;
    font-size: 1.5em;
    padding: 15px 25px;
    margin: auto; /* This centers the button horizontally */
    position: absolute;
    top: 90%; /* This centers the button vertically */
    left: 50%;
    transform: translate(-50%, -50%);
    display:block;
    text-align: center;
    text-shadow: 0 0 10px #fff;
    box-shadow: 0 0 10px #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  
  button.start:hover {
    background-color: #f9f9f9;
    color: #f5c035;
    text-shadow: 0 0 59px #f5c035, 0 0 30px #f5c035, 0 0 40px #f5c035, 0 0 70px #f5c035;
    box-shadow: 0 0 70px #f5c035, 0 0 90px #f5c035, 0 0 90px #f5c035, 0 0 1000px #f5c035;
  }
  

  button.next {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgb(165, 37, 150);
    color: #fff;
    border: 2px solid #f9f9f9;
    border-radius: 40px;
    font-size: 1.5em;
    padding: 15px 25px;
    text-align: center;
    text-shadow: 0 0 10px #fff;
    box-shadow: 0 0 10px #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    bottom: 3rem;
    
  }
  
  button.next:hover {
    background-color: #f9f9f9;
    color: #f5c035;
    text-shadow: 0 0 20px #f5c035, 0 0 30px #f5c035, 0 0 40px #f5c035, 0 0 70px #f5c035;
    box-shadow: 0 0 20px #f5c035, 0 0 30px #f5c035, 0 0 40px #f5c035, 0 0 70px #f5c035;
  }


  .sidebar {
  background-color: rgb(165, 37, 150);
  display: flex;
  flex-direction: column;
  width: 20%;
  background-color: #f1f1f1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow-y: auto;
}

.sidebar a {
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

.sidebar a:hover {
    background-color: #f9f9f9;
    color: #f5c035;
    text-shadow: 0 0 20px #f5c035, 0 0 30px #f5c035, 0 0 40px #f5c035, 0 0 70px #f5c035;
    box-shadow: 0 0 20px #f5c035, 0 0 30px #f5c035, 0 0 40px #f5c035, 0 0 70px #f5c035;
}



`;


