import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Reviews from "../components/Sections/Reviews";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import Locations from "../components/Sections/Locations";
import WhatsApp from '../assets/img/whatsapp-business-icon.jpeg';

export default function Landing() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <TopNavbar />
      <Header />
      <FloatWrapper>
        <a href="https://wa.me/447907772626">
          <Img src={WhatsApp} alt="WhatsApp" />
        </a>
        {showArrow && (
          <ArrowButton onClick={scrollToTop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </ArrowButton>
        )}
      </FloatWrapper>
      <Reviews />
      <Services />
      <Locations/>
      <Contact />
      <Footer />
    </>
  );
}

const Img = styled.img`
  width: 50px; /* Fixed width for desktop */
  height: auto;

  @media (max-width: 560px) {
    width: 40px; /* Smaller size for mobile */
    
  }
`;

const FloatWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  @media (max-width: 560px) {
    bottom: 40px;
  right: 10px;
  }
`;

const ArrowButton = styled.button`
  width: 50px; /* Fixed width */
  height: 50px; /* Fixed height */
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 560px) {
    width: 40px; /* Smaller size for mobile */
    height: 40px; /* Smaller size for mobile */
  }
`;