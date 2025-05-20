// src/components/MobileStickyCTA.jsx
import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const MobileStickyCTA = () => {
  const whatsappNumber = '447907772626'; // Replace with your number
  const message = 'Hello! I have an enquiry.'; // Pre-filled message

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  const handleCallClick = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-11182108205/R7cjCMncm6MaEK3chdQp',
        value: 1.0,
        currency: 'GBP'
      });
    }
  };

  return (
    <StickyContainer>
      {/* <CTAButtonWhatsApp onClick={handleWhatsAppClick}>
        <FaWhatsapp size={20} style={{ marginRight: '8px' }} />
        WhatsApp Us
      </CTAButtonWhatsApp> */}

      <CTAButtonCall href="tel:01513880361"
       onClick={handleCallClick}
      >
        <FaPhoneAlt size={16} style={{ marginRight: '8px' }} />
        Call Now
      </CTAButtonCall>
    </StickyContainer>
  );
};

export default MobileStickyCTA;

// =======================
// Styled Components Below
// =======================

const StickyContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0 !important;
    left: 0;
    width: 100%;
    padding: 10px 0;
    background-color: #ffffff;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
`;

const CTAButtonWhatsApp = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 0 5px;
  background-color: #25d366;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  padding: 12px 0;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #1ebe57;
    transform: scale(1.05);
  }
`;

const CTAButtonCall = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 0 5px;
  background-color: #ff3d00;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  border-radius: 5px;
  padding: 12px 0;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #e63b00;
    transform: scale(1.05);
  }
`;
