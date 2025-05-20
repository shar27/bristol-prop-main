import React from "react";
import styled from "styled-components";
import TopNavbar from "../Nav/TopNavbar";
import WorkShowcaseSlider from "./WorkSlideShow";

export default function Landlords() {

  return (
    <>
      <TopNavbar />
      <Container>
        <Header className="font40 extraBold">Our Work</Header>
        <ContentAndSlideshowWrapper>
          <ContentSection>
            <SubHeader className="font40">How we help.</SubHeader>
            <Paragraph>
              We carry out a range of property maintenance services for landlords, solicitors, letting agents, and homeowners.
            </Paragraph>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              Services:
            </h3>
            <BenefitsList>
              <BenefitItem>✔ Deep cleaning</BenefitItem>
              <BenefitItem>✔ Kitchen Fitting</BenefitItem>
              <BenefitItem>✔ Bathroom fitting</BenefitItem>
              <BenefitItem>✔ Waste/Furniture removal</BenefitItem>
              <BenefitItem>✔ Handyman repair</BenefitItem>
              <BenefitItem>✔ Roof repair</BenefitItem>
              <BenefitItem>✔ Window Washing</BenefitItem>
              <BenefitItem>✔ Gutter Cleaning</BenefitItem>
              <BenefitItem>✔ Pressure Washing</BenefitItem>
              <BenefitItem>✔ Fence repair</BenefitItem>
              <BenefitItem>✔ Electrical </BenefitItem>
              <BenefitItem>✔ Plumbing </BenefitItem>
            </BenefitsList>
          </ContentSection>

          <SliderWrapper>
            <WorkShowcaseSlider />
          </SliderWrapper>

        </ContentAndSlideshowWrapper>
      </Container>
    </>
  );
}

const SliderWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

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
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    margin-top:10px;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SubHeader = styled.h2`
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
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

const Paragraph = styled.p`
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
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
  flex: 1;
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