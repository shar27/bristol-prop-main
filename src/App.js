// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Screens
import Landing          from './screens/Landing.jsx';
import Landlords        from './screens/Landlords.jsx';
import DynamicPage      from './components/DynamicPage.jsx';
import Commercial       from './screens/Commercial.jsx';
import ThankYou         from './screens/ThankYou.jsx';
import JoineryServices  from './screens/JoineryPage.jsx';
import BlogPost         from './screens/BlogPost.jsx';

// Styles for carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App() {
  return (
    <Router>
      <>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
            rel="stylesheet"
          />
        </Helmet>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/landlords" element={<Landlords />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/joinery" element={<JoineryServices />} />
          <Route path="/thankyou" element={<ThankYou />} />

          {/* ← New Strapi-powered blog route */}
          <Route path="/blog/:slug" element={<BlogPost />} />


          {/* Catch-all dynamic page (keep after /blog/:slug) */}
          <Route path="/:slug" element={<DynamicPage />} />

          {/* Duplicate thankyou can be removed if desired */}
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </>
    </Router>
  );
}
