import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ThankYouHeader from '../../src/components/Sections/ThankyouPage/ThankYouHeader';
import TopNavbar from '../components/Nav/TopNavbar';

function ThankYou() {
  const [showRedirectMsg, setShowRedirectMsg] = useState(false);
  const location = useLocation();
  
  // Check if this is from booking flow
  const isBooking = location.state?.fromBooking || location.search.includes('booking=true');

  useEffect(() => {
    // Fire the Google Ads conversion event
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-11182108205/2aQiCM_c0rkaEK3chdQp',
        value: 1.0,
        currency: 'GBP'
      });
    }

    // Show redirect message and start timer
    setShowRedirectMsg(true);

    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <TopNavbar />
      {isBooking ? (
        <div style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h1>Thank You for Your Booking!</h1>
          <p style={{ fontSize: '18px', marginTop: '20px' }}>
            Your house clearance booking has been confirmed. We'll send you a confirmation email shortly.
          </p>
          <p style={{ fontSize: '16px', marginTop: '20px', color: '#666' }}>
            We'll contact you 24 hours before your scheduled collection.
          </p>
        </div>
      ) : (
        <ThankYouHeader />
      )}
      {showRedirectMsg && (
        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px' }}>
          You are being redirected to the homepage...
        </p>
      )}
    </div>
  );
}

export default ThankYou;