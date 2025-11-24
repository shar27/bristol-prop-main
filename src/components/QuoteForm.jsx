import React, { useState } from "react";
import styled from "styled-components";
import StepOne from "./QuoteSteps/StepOne";
import StepTwo from "./QuoteSteps/StepTwo";
import StepThree from "./QuoteSteps/StepThree";
import StepFour from "./QuoteSteps/StepFour";

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Size Selection
    size: "",
    
    // Step 2: Personal Details
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    address: "",
    postcode: "",
    
    // Step 3: Collection Details
    collectionDate: "",
    collectionWindow: "morning",
    description: "",
    images: [],
    imageFiles: [],
    s3Urls: [],
    
    // Step 4: Additional Options
    extras: [],
    agreeToTerms: false,
    propertyValuation: false,
  });

  const [pricing, setPricing] = useState({
    basePrice: 0,
    extrasTotal: 0,
    totalPrice: 0,
    vat: 0,
    totalWithVat: 0
  });

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const calculatePricing = (size, extras = []) => {
    const sizesPricing = {
      small: { base: 130, labour: 10 },
      medium: { base: 175, labour: 15 },
      large: { base: 280, labour: 30 },
      xlarge: { base: 380, labour: 45 },
      xxlarge: { base: 560, labour: 60 },
      test_price: { base: 1, labour: 0 },
    };

    const extrasPricing = {
      extraLabour: 20,
      mattress: 30,
      tv: 12,
      carBattery: 10,
      fluorescent: 2,
      bioBag: 35,
      paintCan: 15,
      fridge: 125,
      underCounterFridge: 30,
      tallFridge: 40,
      gasCanisters: 10,
      fireExtinguisher: 4,
      piano: 160,
      tyres: 20,
      sofas: 30,
    };

    const basePrice = sizesPricing[size]?.base || 0;
    const extrasTotal = extras.reduce((sum, extra) => {
      return sum + (extrasPricing[extra] || 0);
    }, 0);

    const totalPrice = basePrice + extrasTotal;
    const vat = totalPrice * 0.2;
    const totalWithVat = totalPrice + vat;

    return {
      basePrice,
      extrasTotal,
      totalPrice,
      vat,
      totalWithVat,
    };
  };

  return (
    <Wrapper>
      <FormContainer>
        <ProgressBar>
          <Step active={currentStep >= 1} completed={currentStep > 1}>
            1
          </Step>
          <Step active={currentStep >= 2} completed={currentStep > 2}>
            2
          </Step>
          <Step active={currentStep >= 3} completed={currentStep > 3}>
            3
          </Step>
          <Step active={currentStep >= 4} completed={currentStep > 4}>
            4
          </Step>
        </ProgressBar>

        {currentStep === 1 && (
          <StepOne
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
          />
        )}

        {currentStep === 2 && (
          <StepTwo
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}

        {currentStep === 3 && (
          <StepThree
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}

        {currentStep === 4 && (
          <StepFour
            formData={formData}
            handleChange={handleChange}
            handleBack={handleBack}
            pricing={calculatePricing(formData.size, formData.extras)}
          />
        )}
      </FormContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 100px 0 50px 0;
  background-color: #f5f5f5;
`;

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 20px;
    margin: 0 15px;
  }
`;

const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Step = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  background-color: ${(props) =>
    props.completed
      ? "#7620FF"
      : props.active
      ? "#003366"
      : "#e0e0e0"};
  color: ${(props) => (props.active || props.completed ? "white" : "#999")};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;
