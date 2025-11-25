import React from "react";
import styled from "styled-components";
import { SimpleS3Uploader } from "../S3Uploader";

export default function StepThree({
  formData,
  handleChange,
  handleNext,
  handleBack,
}) {
  const handleUploadComplete = (urls) => {
    handleChange("s3Urls", [...(formData.s3Urls || []), ...urls]);
  };

  const removeImage = (index) => {
    const newUrls = (formData.s3Urls || []).filter((_, i) => i !== index);
    handleChange("s3Urls", newUrls);
  };

  const canProceed = formData.collectionDate && formData.description;

  return (
    <Container>
      <Title className="font30 extraBold">Collection details</Title>
      <Subtitle className="font15">Tell us about what we'll be collecting</Subtitle>

      <FormGrid>
        <FormGroup>
          <Label className="font14 semiBold">SELECT YOUR PREFERRED COLLECTION DATE*</Label>
          <Input
            type="date"
            value={formData.collectionDate}
            onChange={(e) => handleChange("collectionDate", e.target.value)}
            min={new Date().toISOString().split("T")[0]}
          />
        </FormGroup>

        <FormGroup>
          <Label className="font14 semiBold">SELECT YOUR PREFERRED COLLECTION WINDOW*</Label>
          <Select
            value={formData.collectionWindow}
            onChange={(e) => handleChange("collectionWindow", e.target.value)}
          >
            <option value="morning">Morning (8am - 12pm)</option>
            <option value="afternoon">Afternoon (12pm - 5pm)</option>
            <option value="evening">Evening (5pm - 8pm)</option>
          </Select>
        </FormGroup>

        <FormGroupFull>
          <Label className="font14 semiBold">DESCRIBE WHAT WE'LL BE COLLECTING*</Label>
          <TextArea
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            placeholder="e.g., furniture, appliances, garden waste..."
            rows="6"
          />
        </FormGroupFull>

        <FormGroupFull>
          <Label className="font14 semiBold">(OPTIONAL) UPLOAD IMAGES OF WHAT WE'LL BE COLLECTING</Label>
          
          <UploadButton>
            <SimpleS3Uploader
              maxFiles={50}
              onComplete={handleUploadComplete}
            />
          </UploadButton>

          {formData.s3Urls && formData.s3Urls.length > 0 && (
            <>
              <FileInputText className="font13" style={{ marginTop: '10px' }}>
                {formData.s3Urls.length} image(s) uploaded
              </FileInputText>
              <ImagePreviewGrid>
                {formData.s3Urls.map((url, index) => (
                  <ImagePreview key={index}>
                    <img src={url} alt={`Preview ${index + 1}`} />
                    <RemoveButton onClick={() => removeImage(index)}>×</RemoveButton>
                  </ImagePreview>
                ))}
              </ImagePreviewGrid>
            </>
          )}
        </FormGroupFull>
      </FormGrid>

      <ButtonWrapper>
        <BackButton className="font15 extraBold" onClick={handleBack}>BACK</BackButton>
        <NextButton className="font15 extraBold" onClick={handleNext} disabled={!canProceed}>
          NEXT STEP
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`width: 100%;`;
const Title = styled.h2`text-align: center; margin-bottom: 10px; color: #0b093b;`;
const Subtitle = styled.p`text-align: center; color: #707070; margin-bottom: 30px;`;
const FormGrid = styled.div`display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; @media (max-width: 768px) { grid-template-columns: 1fr; }`;
const FormGroup = styled.div`display: flex; flex-direction: column;`;
const FormGroupFull = styled.div`grid-column: 1 / -1; display: flex; flex-direction: column;`;
const Label = styled.label`color: #707070; margin-bottom: 8px; text-transform: uppercase;`;
const Input = styled.input`padding: 12px 15px; border: 1px solid #d0d0d0; border-radius: 4px; font-size: 15px; font-family: "Khula", sans-serif; &:focus { outline: none; border-color: #003366; }`;
const Select = styled.select`padding: 12px 15px; border: 1px solid #d0d0d0; border-radius: 4px; font-size: 15px; font-family: "Khula", sans-serif; background-color: white; cursor: pointer; &:focus { outline: none; border-color: #003366; }`;
const TextArea = styled.textarea`padding: 12px 15px; border: 1px solid #d0d0d0; border-radius: 4px; font-size: 15px; font-family: "Khula", sans-serif; resize: vertical; &:focus { outline: none; border-color: #003366; } &::placeholder { color: #b0b0b0; }`;
const UploadButton = styled.div`button { padding: 12px 30px; background-color: #f5f5f5; border: 2px solid #d0d0d0; border-radius: 4px; cursor: pointer; font-family: "Khula", sans-serif; font-weight: 600; font-size: 14px; &:hover { background-color: #e0e0e0; border-color: #003366; } }`;
const FileInputText = styled.span`color: #707070;`;
const ImagePreviewGrid = styled.div`display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 10px; margin-top: 15px;`;
const ImagePreview = styled.div`position: relative; width: 100%; padding-bottom: 100%; border-radius: 4px; overflow: hidden; border: 2px solid #e0e0e0; img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; }`;
const RemoveButton = styled.button`position: absolute; top: 5px; right: 5px; width: 25px; height: 25px; border-radius: 50%; background-color: rgba(255, 0, 0, 0.8); color: white; border: none; cursor: pointer; font-size: 18px; display: flex; align-items: center; justify-content: center; &:hover { background-color: rgba(255, 0, 0, 1); }`;
const ButtonWrapper = styled.div`display: flex; justify-content: space-between; margin-top: 30px; @media (max-width: 768px) { flex-direction: column; gap: 10px; }`;
const BackButton = styled.button`background-color: transparent; color: #003366; border: 2px solid #003366; padding: 15px 40px; border-radius: 6px; cursor: pointer; &:hover { background-color: #003366; color: white; } @media (max-width: 768px) { width: 100%; }`;
const NextButton = styled.button`background-color: #003366; color: white; border: none; padding: 15px 40px; border-radius: 6px; cursor: pointer; &:hover { background-color: #002244; } &:disabled { background-color: #cccccc; cursor: not-allowed; } @media (max-width: 768px) { width: 100%; }`;