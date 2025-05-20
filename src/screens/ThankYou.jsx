import React, { useEffect, useState } from 'react';
import ThankYouHeader from '../../src/components/Sections/ThankyouPage/ThankYouHeader';
import TopNavbar from '../components/Nav/TopNavbar';

function ThankYou() {
  const [showRedirectMsg, setShowRedirectMsg] = useState(false);

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
    }, 7000); // Redirect after 5 seconds

    // Cleanup on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <TopNavbar />
      <ThankYouHeader />
      {showRedirectMsg && (
        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px' }}>
          You are being redirected to the homepage...
        </p>
      )}
    </div>
  );
}

export default ThankYou;
