import React from "react";
import styled from "styled-components";
import navRoutes from "../../config/navRoutes";

export default function Locations() {
  const baseUrl = "https://www.bristolpropertymaintenance.co.uk/";

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <div>
      <h2 style={{ color: "black", fontSize: "32px", textAlign: "center" }}>
        Areas we cover
      </h2>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0B093B"
          fill-opacity="1"
          d="M0,128L40,112C80,96,160,64,240,64C320,64,400,96,480,138.7C560,181,640,235,720,213.3C800,192,880,96,960,85.3C1040,75,1120,149,1200,181.3C1280,213,1360,203,1400,197.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <LocationsWrapper>
        {Object.keys(navRoutes).map((key, index) => (
          <a
            href={`${baseUrl}/${navRoutes[key]}`}
            key={index}
            style={{ color: "white" }}
          >
            {capitalizeFirstLetter(navRoutes[key])}
          </a>
        ))}
      </LocationsWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0B093B"
          fill-opacity="1"
          d="M0,64L48,101.3C96,139,192,213,288,250.7C384,288,480,288,576,261.3C672,235,768,181,864,186.7C960,192,1056,256,1152,277.3C1248,299,1344,277,1392,266.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

const LocationsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  margin-top: -12px;
  padding: 1.25rem;
  height: auto;
  font-size: 21px;
  font-weight: bold;
  color: white;
  background-color: #0b093b;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;