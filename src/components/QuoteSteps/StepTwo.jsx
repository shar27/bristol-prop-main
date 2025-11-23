import React from "react";
import styled from "styled-components";

export default function StepTwo({ formData, handleChange, handleNext, handleBack }) {
  const canProceed =
    formData.firstName &&
    formData.surname &&
    formData.email &&
    formData.phone &&
    formData.address &&
    formData.postcode;

  return (
    <Container>
      <Title className="font30 extraBold">Your details</Title>
      <Subtitle className="font15">Please provide your contact information</Subtitle>

      <FormGrid>
        <FormGroup>
          <Label className="font14 semiBold">FIRST NAME*</Label>
          <Input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            placeholder="Enter your first name"
          />
        </FormGroup>

        <FormGroup>
          <Label className="font14 semiBold">SURNAME*</Label>
          <Input
            type="text"
            value={formData.surname}
            onChange={(e) => handleChange("surname", e.target.value)}
            placeholder="Enter your surname"
          />
        </FormGroup>

        <FormGroup>
          <Label className="font14 semiBold">EMAIL ADDRESS*</Label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Enter your email"
          />
        </FormGroup>

        <FormGroup>
          <Label className="font14 semiBold">PHONE NUMBER*</Label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="Enter your phone number"
          />
        </FormGroup>

        <FormGroupFull>
          <Label className="font14 semiBold">ADDRESS*</Label>
          <TextArea
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
            placeholder="Enter your full address"
            rows="4"
          />
        </FormGroupFull>

        <FormGroupFull>
          <Label className="font14 semiBold">POSTCODE*</Label>
          <Input
            type="text"
            value={formData.postcode}
            onChange={(e) => handleChange("postcode", e.target.value)}
            placeholder="Enter your postcode"
          />
        </FormGroupFull>
      </FormGrid>

      <Note className="font13">
        *Please note: We will contact you to confirm your collection date and window.
      </Note>

      <ButtonWrapper>
        <BackButton className="font15 extraBold" onClick={handleBack}>
          BACK
        </BackButton>
        <NextButton
          className="font15 extraBold"
          onClick={handleNext}
          disabled={!canProceed}
        >
          NEXT STEP
        </NextButton>
      </ButtonWrapper>
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

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormGroupFull = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #707070;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const Input = styled.input`
  padding: 12px 15px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  font-size: 15px;
  font-family: 'Khula', sans-serif;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #003366;
  }

  &::placeholder {
    color: #b0b0b0;
  }
`;

const TextArea = styled.textarea`
  padding: 12px 15px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  font-size: 15px;
  font-family: 'Khula', sans-serif;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #003366;
  }

  &::placeholder {
    color: #b0b0b0;
  }
`;

const Note = styled.p`
  color: #707070;
  font-style: italic;
  margin-bottom: 30px;
  text-align: center;
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

const NextButton = styled.button`
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
