import { createGlobalStyle } from "styled-components";
import Image from './images/hello.jpeg';

export const OurStyle = createGlobalStyle`
html {
    height: 100%;
  }

  .hide {
    display: none !important; 
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

.i{
    display:flex;
    top:50%;
    justify-content:center;
    align-items:center;
}


`;