import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopNavbar from "../Nav/TopNavbar";
import Footer from '../Sections/Footer';
import Contact from "..//Sections/Contact";
import bathroom from '../../assets/img/projects/bathroom.jpg'
import bathroomtiles from '../../assets/img/projects/bathroomtiles.jpg'
import bathroomtiles2 from '../../assets/img/projects/bathroomtiles2.jpg'
import livingroom from '../../assets/img/projects/livingroom.jpg'
import livingroom2 from '../../assets/img/projects/livingroom2.jpg'
import room from '../../assets/img/projects/room.jpg'
import oven from '../../assets/img/projects/OVEN-NEW.jpeg'
import fridge from '../../assets/img/projects/fridgereplace.jpg'

export default function Landlords() {
  const images = [bathroomtiles, bathroom,bathroomtiles, bathroomtiles2,livingroom,livingroom2,fridge, oven, room];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <TopNavbar />
      <Container>
        <Header>Our Work</Header>
        <ContentAndSlideshowWrapper>
          <ContentSection>
            <SubHeader>How we help.</SubHeader>
            <Paragraph>
              We have been carrying our various property maintenance related services for landlords, solicitors, letting agents and individuals
            </Paragraph>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
             Services:
            </h3>
            <BenefitsList>
              <BenefitItem>✔ Deep cleaning</BenefitItem>
              <BenefitItem>✔ Kitchen Fitting</BenefitItem>
              <BenefitItem>✔ Bathroom fitting</BenefitItem>
              <BenefitItem>✔ Waste/Furntiure removal</BenefitItem>
              <BenefitItem>✔ Handyman repair</BenefitItem>
            </BenefitsList>
          </ContentSection>

          <SlideshowContainer>
            <SlideImage
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
            />
          </SlideshowContainer>
        </ContentAndSlideshowWrapper>
      </Container>

    </>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background-color: white;
  color: black;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 3rem;
  padding: 20px 0;
  background-color: white;
`;

const ContentAndSlideshowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  gap: 20px; /* Space between content and slideshow */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack on smaller screens */
    gap: 10px; /* Adjust gap for stacked layout */
    margin-top:10px;
  }
`;

const ContentSection = styled.div`
  flex: 1; /* Allow content to take available space */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the start */
`;

const SubHeader = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Smaller font size on mobile */
  }
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem; /* Smaller font size on mobile */
  }
`;

const BenefitsList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
`;

const BenefitItem = styled.li`
  list-style: none;
  margin: 0.5rem 0;
`;

const SlideshowContainer = styled.div`
  flex: 1; /* Allow slideshow to take available space */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;