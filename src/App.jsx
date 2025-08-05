// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Screens
import Landing         from './screens/Landing.jsx';
import Landlords       from './screens/Landlords.jsx';
import JoineryServices from './screens/JoineryPage.jsx';
import Commercial      from './screens/Commercial.jsx';
import BlogList        from './screens/BlogList.jsx';     // NEW
import BlogPost        from './screens/BlogPost.jsx';     // EXISTING
import ThankYou        from './screens/ThankYou.jsx';
import DynamicPage     from './components/DynamicPage.jsx';

// Styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App() {
  return (
    <Router>
      <>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
        </Helmet>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/landlords" element={<Landlords />} />
          <Route path="/joinery" element={<JoineryServices />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/thankyou" element={<ThankYou />} />

          {/* List all blog posts */}
          <Route path="/blog" element={<BlogList />} />

          {/* Single blog post by slug */}
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* Fallback dynamic pages */}
          <Route path="/:slug" element={<DynamicPage />} />
        </Routes>
      </>
    </Router>
  );
}
