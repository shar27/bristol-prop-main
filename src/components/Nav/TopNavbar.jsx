// src/components/Nav/TopNavbar.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom"; 
// Components
import Sidebar from "./Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCallClick = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-11182108205/zmB1CP7JmtkaEK3chdQp',
        value: 1.0,
        currency: 'GBP'
      });
    }
  };

  return (
    <>
      <ContactInfoSmallScreen>
        <a href="mailto:hello@bristolpropertymaintenance.co.uk">
          📧 hello@bristolpropertymaintenance.co.uk
        </a>
        <a
          href="tel:01172990185"
          onClick={handleCallClick}
        >
          📞 0117 299 0185
        </a>
      </ContactInfoSmallScreen>

      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}

      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "60px" } : { height: "100px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <RouterLink
            className="pointer flexNullCenter"
            to="/"
            onClick={() => {
              setTimeout(() => {
                const section = document.getElementById("/");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }, 0);
            }}
          >
            <LogoIcon />
          </RouterLink>

          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>

          <UlWrapper className="flexNullCenter">
            {/* Home */}
            <li className="semiBold font15 pointer">
              <RouterLink
                to="/"
                style={{ padding: "10px 15px" }}
                onClick={() => {
                  setTimeout(() => {
                    const section = document.getElementById("services");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }, 0);
                }}
              >
                Home
              </RouterLink>
            </li>

            {/* Services Dropdown */}
            <li
              className="semiBold font15 pointer relative"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <span
                className="pointer"
                style={{ padding: "10px 15px", display: "inline-block" }}
              >
                Services ▼
              </span>
              {isDropdownOpen && (
                <ul
                  className="dropdown-menu"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    background: "#fff",
                    border: "1px solid #ccc",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    zIndex: 1000,
                    listStyle: "none",
                    padding: "10px 0",
                    minWidth: "200px"
                  }}
                >
                  <li className="dropdown-item" style={{ padding: "10px 20px" }}>
                    <RouterLink to="/landlords">Guaranteed Rent</RouterLink>
                  </li>
                  <li className="dropdown-item" style={{ padding: "10px 20px" }}>
                    <RouterLink to="/joinery">Joinery Services</RouterLink>
                  </li>
                </ul>
              )}
            </li>

            {/* Blog Link */}
            <li className="semiBold font15 pointer">
              <RouterLink
                to="/blog"
                style={{ padding: "10px 15px" }}
              >
                Blog
              </RouterLink>
            </li>


            {/* Commercial */}
            <li className="semiBold font15 pointer">
              <RouterLink
                to="/commercial"
                style={{ padding: "10px 15px" }}
              >
                Commercial
              </RouterLink>
            </li>

            {/* Contact */}
            <li className="semiBold font15 pointer">
              <RouterLink
                to="/#contactlg"
                style={{ padding: "10px 15px" }}
                onClick={() => {
                  setTimeout(() => {
                    const section = document.getElementById("contactlg");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }, 0);
                }}
              >
                Contact
              </RouterLink>
            </li>
          </UlWrapper>

          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <a
                href="mailto:hello@bristolpropertymaintenance.co.uk"
                style={{ padding: "10px 30px 10px 0" }}
              >
                📧 hello@bristolpropertymaintenance.co.uk
              </a>
              <br />
              <a
                href="tel:01172990185"
                onClick={handleCallClick}
                style={{ padding: "10px 30px 10px 0" }}
              >
                Call today 📞 0117 299 0185
              </a>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

// Styled Components

const ContactInfoSmallScreen = styled.div`
  display: none;
  background-color: #003366;
  color: white;
  text-align: center;
  padding: 10px 0;
  font-weight: 700;

  a {
    color: white;
    display: block;
    padding: 5px 0;
  }

  @media (max-width: 760px) {
    position: fixed;
    width: 100%;
    display: block;
    z-index: 999;
    font-size: 14px;
    text-align: center;
  }
`;

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 999;
  transition: height 0.3s ease-in-out, top 0.3s ease-in-out;

  @media (max-width: 760px) {
    display: block;
    position: fixed;
    top: 80px;
    left: 0;
    transition: height 0.3s ease-in-out, top 0.3s ease-in-out;
  }
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
`;

const BurderWrapper = styled.button`
  outline: none;
  border: 0;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;

  @media (max-width: 760px) {
    display: block;
    margin-right: 40px;
  }
`;

const UlWrapper = styled.ul`
  display: flex;

  @media (max-width: 760px) {
    display: none !important;
  }
`;

const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none !important;
  }
`;
