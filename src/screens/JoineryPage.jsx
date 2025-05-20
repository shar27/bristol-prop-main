import React from "react";
import styled from "styled-components";
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
import Contact from "../components/Sections/Contact";

export default function JoineryServices() {
  return (
    <Wrapper>
      <TopNavbar />

      <HeroSection>
        <HeroBackground>
          <HeroOverlay />
          <HeroContent>
            <h1>Joinery Services in Bristol</h1>
            <p>
              Affordable joinery solutions for homes and businesses – from door hanging and shelving to small custom woodwork jobs.
            </p>
          </HeroContent>

          <QuoteBox>
            <h3>Need a joiner? We can help!</h3>
            <p>
              Trusted Liverpool joiners ready for all kinds of small and medium jobs. Request a quote and we’ll reply within 15 minutes.
            </p>
            <a href="/joinery#joinform" className="cta-button">Get a Free Quote</a>
          </QuoteBox>
        </HeroBackground>
      </HeroSection>

      <ContentSection>
        <h2>What We Offer</h2>
        <ul>
          <li>✅ Door hanging and replacement</li>
          <li>✅ Skirting board and architrave fitting</li>
          <li>✅ Floating shelves and custom storage</li>
          <li>✅ Kitchen cabinet adjustments</li>
          <li>✅ Wood floor installations and repairs</li>
          <li>✅ Small custom woodwork jobs</li>
        </ul>
      </ContentSection>

      <FAQSection>
        <h2>FAQs</h2>
        <div>
          <h4>Do you handle small joinery jobs?</h4>
          <p>Yes, we specialise in small to medium joinery tasks.</p>
        </div>
        <div>
          <h4>Are your joiners qualified?</h4>
          <p>All joiners are experienced and fully insured subcontractors.</p>
        </div>
      </FAQSection>
   <section id="joinform"> 
    <Contact/>
    </section>
      <Footer />
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.div`
  font-family: Arial, sans-serif;
`;

const HeroSection = styled.section`
  position: relative;
`;

const HeroBackground = styled.div`
  position: relative;
  background-image: url("https://res.cloudinary.com/daaahgwfy/image/upload/v1744971085/joinery2_fxvmsf.jpg");
  background-size: cover;
  background-position: center;
  height: 500px;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding-top: 187px;
  color: white;

  h1 {
    font-size: 36px;
    margin-bottom: 15px;
  }

  p {
    font-size: 18px;
    max-width: 700px;
    margin: 0 auto;
  }

  // @media screen and (max-width:600px){
  // padding-top: 185px;
  // }
`;

const QuoteBox = styled.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 25px;
  width: 90%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 2;

  h3 {
    margin-bottom: 10px;
    font-size: 18px;
  }

  p {
    font-size: 14px;
    margin-bottom: 15px;
    color: #333;
  }

  .cta-button {
    background: #ff3d00;
    color: #fff;
    padding: 12px 24px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
  }

  @media (max-width: 768px) {
    bottom: -40px;
    padding: 20px;
    h3 {
      font-size: 16px;
    }
    p {
      font-size: 13px;
    }
    .cta-button {
      padding: 10px 20px;
      font-size: 14px;
    }
  }
`;


const ContentSection = styled.section`
  padding: 80px 20px 40px;
  max-width: 800px;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin-bottom: 30px;
  }

  ul {
    list-style: none;
    padding-left: 0;
    font-size: 16px;
    line-height: 2;
  }
`;

const FAQSection = styled.section`
  background: #f8f8f8;
  padding: 60px 20px;
  h2 {
    text-align: center;
    margin-bottom: 30px;
  }

  div {
    max-width: 800px;
    margin: 0 auto 30px;

    h4 {
      margin-bottom: 5px;
    }

    p {
      margin: 0;
    }
  }
`;
