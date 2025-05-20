import React from 'react';
import styled from "styled-components";

export default function Badges() {
  return (
    <Wrapper>
      <HeaderInfo>
        <h1 className="font40 extraBold">We are insured.</h1>
      </HeaderInfo>

      <ServiceBoxRow>
        <ServiceBoxWrapper>
          <img src="https://res.cloudinary.com/daaahgwfy/image/upload/c_thumb,w_200,g_face/v1741601995/license/licence_pzcnsp.png" alt="License 1" />
          <p>Waste carriers Licence</p>
          <p className='font13 semiBold'>CBDU549797</p>
        </ServiceBoxWrapper>

        <ServiceBoxWrapper>
          <img src="https://res.cloudinary.com/daaahgwfy/image/upload/v1741602697/license/aqueous_management_limited_logo_uxlsr2.jpg" alt="License 2" />
          <p>Professional Indemnity Insurance</p>
          <p className='font13 semiBold'>10643855</p>
        </ServiceBoxWrapper>

        <ServiceBoxWrapper>
          <img src="https://res.cloudinary.com/daaahgwfy/image/upload/v1741603762/license/ICO_logo_odlmjg.png" alt="License 3" />
          <p>Information Commissioners Office</p>
          <p className='font13 semiBold'>ZB657669</p>
        </ServiceBoxWrapper>
      </ServiceBoxRow>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 40px 20px;
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const ServiceBoxRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceBoxWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;

  img {
    width: 100px;
    height: auto;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
  }
`;
