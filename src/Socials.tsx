import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { OurStyle } from "../src/Home.style";

const IconWrapper = styled.a`
 top:50%
 justify-content:center; 
 align-items:center;
`;

 function Socials(){

    return(
        <>
        <OurStyle />
       <IconWrapper href="https://www.instagram.com/">
          <FontAwesomeIcon icon={faInstagram} className="i" />
        </IconWrapper>
        <IconWrapper href="https://twitter.com/">
          <FontAwesomeIcon icon={faTwitter} className="i" />
        </IconWrapper>
        <IconWrapper href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebook} className="i" />
        </IconWrapper>
      </>
    
    )
   
    };
    export default Socials;