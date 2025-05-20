import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/header-img.jpg";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import MiniForm from '../Sections/MiniForm'

export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
     
   
      <LeftSide className="flexCenter">
        <div>
        <HeadingTag>
        Bristol Property Maintenance -
        Serving Bristol & surrounding areas.
          </HeadingTag>
          <LargeHeading>
          <h2 className="extraBold font40">Bristol Property Maintenance</h2>
          
          <HeaderP className="font13 semiBold">
          Fully insured and trusted by Bristol landlords, agents, and homeowners. Free quotes with 0% finance available.

          </HeaderP>
</LargeHeading>
          <SmallHeading>

              Fully insured and trusted by Bristol landlords, agents, and homeowners. Free quotes with 0% finance available.
          </SmallHeading>
          <BtnWrapper>
            <a href="#contactForm">
            <FullButton title="Request Your Free Quote"  />
            </a>
          </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" src={HeaderImage} width="100%" alt="office" style={{zIndex: 9}} />
         <MiniFormWrapperSmall>
          <MiniForm />
          </MiniFormWrapperSmall>
      
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
}

const MiniFormWrapperSmall = styled.div `

@media (max-width:1024px){
display:none;

}
`

const SmallHeading = styled.div `

@media (min-width:1024px){
display:none;
}

@media (max-width:1024px){
display:block;
padding: 0px;
}
`

const LargeHeading = styled.div `
@media (max-width:1024px){
display:none;

}

`
const ContactWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 400px;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  z-index: 10;

  @media (max-width: 960px) {
    position: relative;
    transform: none;
    top: auto;
    left: auto;
    width: 100%;
    padding: 20px;
    margin-top: 20px;
  }
`;


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
   width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
   width: 50%;
  height: 100%;
  position: relative;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
   max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 10px 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;


const HeadingTag = styled.div`
  display: none;
  @media (max-width: 960px) {
    display: block;
    opacity:100%;
    color:white;
    text-transform:uppercase;
    text-align: center;
    font-weight:700;
    margin-bottom: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    font-size: 1.5rem;
  }

   @media (max-width: 600px) {
    display: block;
    opacity:100%;
    color:white;
    text-transform:uppercase;
    text-align: center;
    font-weight:700;
    margin-bottom: 20px;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    font-size: 1.25rem;
  }
`;


const BtnWrapper = styled.div`
  
 display: block;
 width:80%;
 margin-bottom:30px;
 font-weight:700;
  @media (max-width: 960px) {
    display: block;
    position: absolute;
    left: 50%;
    top: 70%;
    bottom: 20px;
    transform: translateX(-50%);
    z-index: 10;
    font-weight:700;
  }
`;
const GreyDiv = styled.div`
    width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
      filter: brightness(0.5); /* Darkens image by reducing brightness */

    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 100%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 40%;
  
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  
  @media (max-width: 960px) {
    left: 50%;
    display:none !important;
    bottom: auto;
    top: 40%;
    transform: translateX(-50%);
    margin-bottom: 10px;
  }
  @media (max-width: 560px) {
  display:none;
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
    position: absolute;
    
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


