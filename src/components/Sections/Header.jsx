import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/header-img.jpg";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";

export default function Header() {


  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <HeadingTag>
            Property maintenance specialists covering Bath, Bristol &
            surrounding areas.
          </HeadingTag>
          <h1 className="extraBold font60">
            Bristol Property Maintenance.
          </h1>

          <HeaderP className="font13 semiBold">
            Looking for reliable property maintenance services in Bristol, Bath
            & surrouding areas Our experienced team offers comprehensive
            solutions for residential and commercial properties, including
            building maintenance, repairs, and management. Trust us for
            efficient and affordable services tailored to landlords and property
            owners. Contact us for emergency assistance and ensure your
            property's upkeep with our expert solutions.
          </HeaderP>

          <BtnWrapper>
            <a href="#contactForm">
              <FullButton title="Free Quote" />
            </a>
          </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img
            className="radius8"
            src={HeaderImage}
            width="100%"
            alt="office"
            style={{ zIndex: 9 }}
          />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>Making the difficult choices, easier.</em>
              </p>
            </div>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
      
    </Wrapper>
  );
}

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
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;

const HeadingTag = styled.div`
  display: none;
  @media (max-width: 960px) {
    display: block;
    color: white;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    opacity: 100%;
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
    color: white;
    opacity: 100%;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
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
  width: 80%;
  margin-bottom: 30px;
  font-weight: 700;
  @media (max-width: 960px) {
    display: block;
    position: absolute;
    left: 50%;
    top: 70%;
    bottom: 20px;
    transform: translateX(-50%);
    z-index: 10;
    font-weight: 700;
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
