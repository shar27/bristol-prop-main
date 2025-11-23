import React, { useState } from "react";
import styled from "styled-components";

export function SimpleS3Uploader({ onComplete, maxFiles = 4 }) {
  const [uploading, setUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

const handleFileSelect = async (e) => {
  const files = Array.from(e.target.files);
  if (files.length > maxFiles) {
    alert(`Maximum ${maxFiles} files allowed`);
    return;
  }
  
  if (files.length === 0) return;
  
  setSelectedFiles(files);
  
  // Auto-upload immediately after selection
  setUploading(true);
  try {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('images', file);
    });

    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
    const response = await fetch(`${apiUrl}/upload-temp`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const data = await response.json();
    console.log('✅ Upload response:', data);
    
    if (data.s3Urls && data.s3Urls.length > 0) {
      onComplete(data.s3Urls);
      setSelectedFiles([]);
    }
  } catch (error) {
    console.error('Upload error:', error);
    alert('Failed to upload files. Please try again.');
  } finally {
    setUploading(false);
  }
};


  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;

    setUploading(true);
    try {
      const formData = new FormData();
      selectedFiles.forEach((file) => {
        formData.append('images', file);
      });

      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
      const response = await fetch(`${apiUrl}/upload-temp`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      console.log('✅ Upload response:', data);
      
      if (data.s3Urls && data.s3Urls.length > 0) {
        onComplete(data.s3Urls);
        setSelectedFiles([]);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload files. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Container>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileSelect}
        style={{ display: 'none' }}
        id="file-input"
      />
      <Label htmlFor="file-input">
        Choose Files
      </Label>
      
      {selectedFiles.length > 0 && (
        <FileInfo>
          {selectedFiles.length} file(s) selected
          <UploadButton onClick={handleUpload} disabled={uploading}>
            {uploading ? 'Uploading...' : 'Upload'}
          </UploadButton>
        </FileInfo>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  padding: 12px 30px;
  background-color: #f5f5f5;
  border: 2px solid #d0d0d0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;
  font-family: "Khula", sans-serif;
  font-weight: 600;
  font-size: 14px;

  &:hover {
    background-color: #e0e0e0;
    border-color: #003366;
  }
`;

const FileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #707070;
  font-size: 14px;
`;

const UploadButton = styled.button`
  padding: 8px 20px;
  background-color: #003366;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Khula", sans-serif;
  font-weight: 600;
  font-size: 14px;

  &:hover:not(:disabled) {
    background-color: #002244;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;