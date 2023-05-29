import React, { useState } from "react";
import {
  NavbarContainer,
  OpenLinksButton,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkExtendedOne,
  NavbarLinkExtendedTwo,
  NavbarLinkExtendedThree,
  NavbarLinkExtendedFour,
  NavbarLinkExtendedFive,
  NavbarLinkExtendedSix,
} from "./StyledNavbar";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);



  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <OpenLinksButton
          onClick={() => {
            setExtendNavbar((current) => !current);
          }}
        >
          {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
        </OpenLinksButton>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtendedOne to="/home">
            Home
          </NavbarLinkExtendedOne>
          <NavbarLinkExtendedTwo to="/about">About</NavbarLinkExtendedTwo>
          <NavbarLinkExtendedThree to="/projects">
            Projects
          </NavbarLinkExtendedThree>
          <NavbarLinkExtendedFour to="/contact">Contact</NavbarLinkExtendedFour>
          <NavbarLinkExtendedFive to="/">Français</NavbarLinkExtendedFive>
          <NavbarLinkExtendedSix to="/home">English</NavbarLinkExtendedSix>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
