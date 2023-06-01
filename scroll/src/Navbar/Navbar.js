import React, { useState } from "react";
import DynamicHome from "./DynamicNavbarLinks/DynamicHome";
import DynamicAbout from "./DynamicNavbarLinks/DynamicAbout";
import DynamicProjects from "./DynamicNavbarLinks/DynamicProjects";
import DynamicContact from "./DynamicNavbarLinks/DynamicContact";
import DynamicFrancais from "./DynamicNavbarLinks/DynamicFrancais";
import DynamicEnglish from "./DynamicNavbarLinks/DynamicEnglish";
import {
  StyledHam,
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
          {extendNavbar ? <>&#10005;</> : <StyledHam> &#8801;</StyledHam>}
        </OpenLinksButton>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtendedOne>
            <DynamicHome to="/home" />
          </NavbarLinkExtendedOne>
          <NavbarLinkExtendedTwo to="/about">
            <DynamicAbout />
          </NavbarLinkExtendedTwo>
           <NavbarLinkExtendedThree to="/projects">
            <DynamicProjects />
          </NavbarLinkExtendedThree>
          <NavbarLinkExtendedFour to="/contact">
            <DynamicContact />
          </NavbarLinkExtendedFour>
          <NavbarLinkExtendedFive to="/">
            <DynamicFrancais />
          </NavbarLinkExtendedFive>
          <NavbarLinkExtendedSix to="/home">
            <DynamicEnglish />
      </NavbarLinkExtendedSix>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
