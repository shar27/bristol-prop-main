import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import from react-router-dom
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoWhite from '../../assets/svg/Logo_White';

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  const handleScroll = (id) => {
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
    toggleSidebar(!sidebarOpen); // Close the sidebar after clicking
  };

  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoWhite />
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <Link
            to="/"
            onClick={() => handleScroll("home")}
            className="whiteColor"
            style={{ padding: "10px 15px", display: 'block' }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/#services"
            onClick={() => handleScroll("services")}
            className="whiteColor"
            style={{ padding: "10px 15px", display: 'block' }}
          >
            Services
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            to="/clearance"
            onClick={() => handleScroll("banner")}
            className="whiteColor"
            style={{ padding: "10px 15px", display: 'block' }}
          >
            Clearance
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            to="/zero-percent-finance"
            onClick={() => handleScroll("services")}
            className="whiteColor"
            style={{ padding: "10px 15px", display: 'block' }}
          >
            0% Interest Finance
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            to="/joinery"
            onClick={() => handleScroll("services")}
            className="whiteColor"
            style={{ padding: "10px 15px", display: 'block' }}
          >
            Joinery
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            to="/Landlords"
            onClick={() => handleScroll("services")}
            className="whiteColor"
            style={{ padding: "10px 15px", display: 'block' }}
          >
            Guaranteed Rent
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link

            className="pointer whiteColor"
            style={{ padding: "10px 15px" }}
            to="/commercial"
          >
            Commercial
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            to="/#contact"
            onClick={() => handleScroll("contact")}
            className="whiteColor"
            style={{ padding: "10px 15px", display: 'block' }}
          >
            Contact
          </Link>
        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  transition: right 0.3s ease; // Optional smooth transition
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const SidebarHeader = styled.div`
  padding: 20px 0;
`;

const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 40px;
`;

const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;