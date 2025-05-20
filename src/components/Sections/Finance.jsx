import React from 'react';
import styled from 'styled-components';
import TopNavbar from '../Nav/TopNavbar';
import Footer from '../Sections/Footer'

const ZeroPercentFinance = () => {
  return (
    <>
    <TopNavbar/>
    <Section>
      <Title>0% Finance Available with Ayan Pay</Title>
      <Subtitle>
        Spread the cost of your home improvement with flexible instalments —
       no interest, no hidden fees, no hard credit checks. Trusted finance made easy with Ayan Pay.
      </Subtitle>

      <Grid>
        <Card>
          <CardTitle>No Hard Credit Check</CardTitle>
          <CardText>No impact on your credit score when applying for finance.</CardText>
        </Card>

        <Card>
          <CardTitle>Use Now, Pay in 12</CardTitle>
          <CardText>Get the work done now, with options to pay over 3, 6, or 12 months.</CardText>
        </Card>

        <Card>
          <CardTitle>No Late Fees</CardTitle>
          <CardText>No sneaky charges or penalties — just simple payments.</CardText>
        </Card>
      </Grid>

      <Button
        href="https://www.ayanpay.co.uk/#calc"
        target="_blank"
        rel="noopener noreferrer"
      >
        Apply for 0% Finance
      </Button>

      <QRSection>
        <QRTitle>Scan to Apply Instantly</QRTitle>
        <QRImage src="https://res.cloudinary.com/dobirrdcu/image/upload/v1745687232/JRHw17_ygdeo6.png" alt="Apply for finance QR code" />
      </QRSection>
    </Section>
    <Footer/>
    </>
  );
};

export default ZeroPercentFinance;

const Section = styled.section`
  max-width:600px;
  margin: 0 auto;
  padding: 3rem 1rem;
  background: #ffffff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-top: 3.2rem;
  margin-bottom: 1.5rem;

  @media(max-width: 768px) {
  margin-top: 10rem;
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 2rem;

  @media(min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem; /* More breathing space on mobile */

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem; /* tighten gap on desktop */
  }
`;


const Card = styled.div`
  background: ${props => props.bg || "#fff"};
  color: #222;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  width: 100%; /* full width on mobile */
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media(min-width: 768px) {
    max-width: 300px; /* fixed width on desktop */
  }
`;


const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Button = styled.a`
  display: inline-block;
  background: #ff5722;
  color: #fff;
  margin-top: 0.5rem;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: #e64a19;
  }
`;

const QRSection = styled.div`
  margin-top: 3rem;
`;

const QRTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const QRImage = styled.img`
  width: 160px;
  height: 160px;
  margin: 0 auto;
`;