// src/components/WhatsappIcon.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappIcon = () => {
  const whatsappNumber = '447907772626'; // Replace with your number
  const message = 'Hello! I have an enquiry.'; // Pre-filled message

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Google Ads conversion tracking
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-11182108205/SOsbCM_bnNkaEK3chdQp',
        event_callback: () => {
          window.open(url, '_blank');
        }
      });
    } else {
      // fallback in case gtag hasn't loaded yet
      window.open(url, '_blank');
    }
  };



  return (
    <div
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '35px',
        zIndex: 1000,
        cursor: 'pointer',
      }}
    >
      <div style={{ position: 'relative' }}>
        {/* WhatsApp Icon */}
        <FaWhatsapp size={60} color="#25D366" />

        {/* Notification Badge */}
        <div
          style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 'bold',
            boxShadow: '0 0 5px rgba(0,0,0,0.3)',
          }}
        >
          1
        </div>
      </div>
    </div>
  );
};

export default WhatsappIcon;
