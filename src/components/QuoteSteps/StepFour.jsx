import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SquarePayment from "../../Payment/SquarePayment";

export default function StepFour({ formData, handleChange, handleBack, pricing }) {


  const [showPayment, setShowPayment] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const canProceed = formData.agreeToTerms;

  const handleSubmit = async () => {
    if (!canProceed) return;
    setShowPayment(true);
  };

const handlePaymentSuccess = async (paymentResult) => {
  setIsProcessing(true);
  try {
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
    
    const response = await fetch(`${apiUrl}/api/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        pricing: JSON.stringify(pricing),
        paymentResult: JSON.stringify(paymentResult),
        s3Urls: JSON.stringify(formData.s3Urls || []),
      }),
    });

    if (response.ok) {
      window.location.href = '/thankyou?booking=true';
    } else {
      alert('Error processing booking.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error processing booking.');
  } finally {
    setIsProcessing(false);
  }
};

  return (
    <Container>
      {!showPayment ? (
        <>
          <Title className="font30 extraBold">Your preferred booking</Title>
          <Subtitle className="font15">Review your details before proceeding to payment</Subtitle>

          <SummarySection>
            <SummaryCard>
              <SummaryIcon>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4"
                    y="8"
                    width="16"
                    height="12"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 8V6C8 4.89543 8.89543 4 10 4H14C15.1046 4 16 4.89543 16 6V8"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </SummaryIcon>
              <SummaryTitle className="font18 extraBold">Service & Size</SummaryTitle>
              <SummaryText className="font15">
                {formData.size.charAt(0).toUpperCase() + formData.size.slice(1)} Collection
                <br />
                <span style={{ fontSize: '14px', color: '#707070' }}>
                  {formData.description}
                </span>
              </SummaryText>
            </SummaryCard>

            <SummaryCard>
              <SummaryIcon>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" />
                </svg>
              </SummaryIcon>
              <SummaryTitle className="font18 extraBold">Collection Date & Time</SummaryTitle>
              <SummaryText className="font15">
                {new Date(formData.collectionDate).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
                <br />
                {formData.collectionWindow === 'morning' && 'Morning (8am - 12pm)'}
                {formData.collectionWindow === 'afternoon' && 'Afternoon (12pm - 5pm)'}
                {formData.collectionWindow === 'evening' && 'Evening (5pm - 8pm)'}
              </SummaryText>
            </SummaryCard>

            <SummaryCard>
              <SummaryIcon>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </SummaryIcon>
              <SummaryTitle className="font18 extraBold">Collection Address</SummaryTitle>
              <SummaryText className="font15">
                {formData.address}
                <br />
                {formData.postcode}
              </SummaryText>
            </SummaryCard>
          </SummarySection>

          <PricingSection>
            <PricingTitle className="font20 extraBold">Estimated Price</PricingTitle>
            <PriceBreakdown>
              <PriceRow>
                <PriceLabel className="font15">Base Price:</PriceLabel>
                <PriceValue className="font15">£{pricing.basePrice.toFixed(2)}</PriceValue>
              </PriceRow>
              {pricing.extrasTotal > 0 && (
                <PriceRow>
                  <PriceLabel className="font15">Extras:</PriceLabel>
                  <PriceValue className="font15">£{pricing.extrasTotal.toFixed(2)}</PriceValue>
                </PriceRow>
              )}
              <Divider />
              <PriceRow>
                <TotalLabel className="font18 extraBold">Total:</TotalLabel>
                <TotalValue className="font18 extraBold">
                  £{pricing.totalPrice.toFixed(2)}
                </TotalValue>
              </PriceRow>
            </PriceBreakdown>
          </PricingSection>

          <CheckboxSection>
            <Checkbox
              type="checkbox"
              checked={formData.propertyValuation}
              onChange={(e) =>
                handleChange("propertyValuation", e.target.checked)
              }
              id="property-valuation"
            />
            <CheckboxLabel htmlFor="property-valuation" className="font14">
              Would you like an intro to our property valuation partners who provide a valuation
              report and sale of the property?
            </CheckboxLabel>
          </CheckboxSection>

          <CheckboxSection>
            <Checkbox
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={(e) => handleChange("agreeToTerms", e.target.checked)}
              id="terms"
            />
            <CheckboxLabel htmlFor="terms" className="font14">
              Please tick to acknowledge you agree to our{" "}
              <a href="/terms" target="_blank">
                terms and conditions
              </a>
            </CheckboxLabel>
          </CheckboxSection>

          <ButtonWrapper>
            <BackButton className="font15 extraBold" onClick={handleBack}>
              BACK
            </BackButton>
            <SubmitButton
              className="font15 extraBold"
              onClick={handleSubmit}
              disabled={!canProceed}
            >
              PROCEED TO PAYMENT
            </SubmitButton>
          </ButtonWrapper>
        </>
      ) : (
        <PaymentWrapper>
          <Title className="font30 extraBold">Complete Your Payment</Title>
          <Subtitle className="font15">
            Total Amount: £{pricing.totalPrice.toFixed(2)}
          </Subtitle>
          <SquarePayment
            amount={pricing.totalPrice}
            onPaymentSuccess={handlePaymentSuccess}
            onPaymentCancel={() => setShowPayment(false)}
            isProcessing={isProcessing}
          />
        </PaymentWrapper>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  color: #0b093b;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #707070;
  margin-bottom: 30px;
`;

const SummarySection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SummaryCard = styled.div`
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 25px;
  text-align: center;
  background: #fafafa;
`;

const SummaryIcon = styled.div`
  color: #003366;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
`;

const SummaryTitle = styled.h3`
  color: #0b093b;
  margin-bottom: 10px;
`;

const SummaryText = styled.p`
  color: #0b093b;
  line-height: 1.6;
`;

const PricingSection = styled.div`
  border: 2px solid #003366;
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 30px;
  background: #f0f8ff;
`;

const PricingTitle = styled.h3`
  color: #003366;
  margin-bottom: 20px;
  text-align: center;
`;

const PriceBreakdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PriceLabel = styled.span`
  color: #0b093b;
`;

const PriceValue = styled.span`
  color: #0b093b;
`;

const TotalLabel = styled.span`
  color: #003366;
`;

const TotalValue = styled.span`
  color: #003366;
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px solid #003366;
  margin: 10px 0;
`;

const CheckboxSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-top: 2px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  color: #0b093b;
  line-height: 1.5;
  cursor: pointer;

  a {
    color: #003366;
    text-decoration: underline;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const BackButton = styled.button`
  background-color: transparent;
  color: #003366;
  border: 2px solid #003366;
  padding: 15px 40px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #003366;
    color: white;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px 20px;
  }
`;

const SubmitButton = styled.button`
  background-color: #003366;
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #002244;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px 20px;
  }
`;

const PaymentWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;