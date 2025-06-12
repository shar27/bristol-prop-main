import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoWhite from "../../assets/svg/Logo_White";
import Logoimg from "../../assets/svg/Logo"

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <LogoWhite />
              
            </Link>
            {/* <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">Property Maintenance Liverpool</span> All Right Reserved
            </StyleP> */}
            <StyleP className="whiteColor font13">
             <h6 className="whiteColor font13">Bristol Property Maintenance is 
             trading name for <br/> SWIFT UK PROPERTY INVESTMENTS LTD. <br/>
             Company number: 15244665
             
             </h6> 
            </StyleP>
            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
      <BottomFooter>
    
      <li className="semiBold font15 pointer">
              <a
                href="mailto:hello@bristolpropertymaintenance.co.uk  "
                
              >
                📧 hello@bristolpropertymaintenance.co.uk  
              </a>
          </li>
          <li className="semiBold font15 pointer">
              <a href="tel:01172990185" >
                Call today 📞 0117 299 0185
              </a>
            </li>
    
      </BottomFooter>
    </Wrapper>
    
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const BottomFooter = styled.ul`
  display: flex;
  justify-content: space-between;
  color: black;
  list-style: none;
  font-weight: 600; /* use numeric font weights instead of 'semi-bold' */
  padding: 1.5rem;
  margin: 0; /* Reset margin */
  padding-left: 0; /* Remove default padding */

  li {
    font-weight: 600; /* consistent font-weight */
    list-style: none;
  }

  li a {
    font-weight: 600;
    text-decoration: none;
    color: black;
  }

  @media (max-width: 550px) {
    flex-direction: column; /* stack items vertically */
    align-items: center; /* optional: center items */
    font-size: 12px; /* slightly bigger than 9px for readability */
    gap: 10px; /* adds spacing between stacked items */
  }
`;

const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;