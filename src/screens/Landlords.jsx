import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from '../components/Sections/Footer';
import Contact from "../components/Sections/Contact";
import poolroom from '../assets/img/poolroom.jpg'
import livingroom from '../assets/img/livingroom.jpg'
import bedroom from '../assets/img/bedroom.jpg'

export default function Landlords() {
  const images = [livingroom, poolroom,bedroom];
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
        <Header>Landlords</Header>
        <ContentAndSlideshowWrapper>
          <ContentSection>
            <SubHeader>From one Landlord to Another</SubHeader>
            <Paragraph>
              I’m a landlord myself, so I know how frustrating it can be at
              times having to deal with the different aspects that come with it.
              That’s why I am offering a guaranteed rent service, paired with
              any minor refurbishment work needed to improve the quality of your
              property. This hassle-free package also includes seamless
              maintenance, making property ownership more straightforward and
              financially secure.
            </Paragraph>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              Benefits at a Glance:
            </h3>
            <BenefitsList>
              <BenefitItem>✔ Guaranteed rent with contracts up to 5 years</BenefitItem>
              <BenefitItem>✔ No missed payments</BenefitItem>
              <BenefitItem>✔ No agency fees</BenefitItem>
              <BenefitItem>✔ Regular maintenance and clean</BenefitItem>
              <BenefitItem>✔ Hassle-free experience</BenefitItem>
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
      <Contact />
      <Footer />
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