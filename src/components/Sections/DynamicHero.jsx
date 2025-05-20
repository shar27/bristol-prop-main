import React from 'react';
import styled from 'styled-components';
import FullButton from '../Buttons/FullButton';
import HeaderImage from '../../assets/img/header-img.jpg';


const DynamicHero = ({ text, paragraph }) => {
  return (
    <>
    <HeroContainer>
        <ContentWrapper>
        <HeroHeading>{text.toUpperCase()}</HeroHeading>
        <HeroParagraph>{paragraph}</HeroParagraph>
        <a href="#contactForm">
    <FullButton title="Free Quote" />
  </a>
      </ContentWrapper>
      <ImageWrapper>
        <HeroImage
          className="radius8" // Ensure this class is defined in your CSS
          src={HeaderImage}
          alt="An office space representing property maintenance services"
          style={{ zIndex: 9 }} // Ensure this is necessary
        />
      </ImageWrapper>
      
    </HeroContainer>
    
  </>
  );
};

export default DynamicHero;

// Styled Components
const HeroContainer = styled.div`
  width: 100%;
  min-height: 840px;
  display: flex;
  flex-direction: row; /* Change to row to place items side by side */
  justify-content: space-between; /* Space out the content */
  align-items: center; /* Center vertically */
  padding: 30px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items on small screens */
    text-align: center; /* Center text on small screens */
  }
`;

const ImageWrapper = styled.div`
  width: 50%; /* Set width for image wrapper */
  max-width: 500px; /* Adjust max-width as per design */
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto; /* Ensures the image scales properly */
  object-fit: cover; /* Ensures the image covers the space without distortion */
`;

const ContentWrapper = styled.div`
  color: black;
  max-width: 500px; /* Set a max width for the content */
  padding: 10px; /* Optional padding for aesthetics */
`;

const HeroHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroParagraph = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
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