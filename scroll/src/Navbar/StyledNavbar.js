import styled from "styled-components";

export const StyledHam = styled.div`
  color: #0c0c0c;
  font-size: 3rem;
  margin-top: -0.75rem;
`;

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  caret-color: transparent;
  width: 100vw;
  height: ${(props) => (props.extendNavbar ? "100vh" : "0")};
  background-color: #0c0c0c;
  `;

export const NavbarInnerContainer = styled.div`
  border: ${(props) => (props.extendNavbar ? "#926d0b solid 2px" : "0")};
  border: #926d0b solid 2px;
  border-radius: 6px;
  width: fit-content;
  `;

export const OpenLinksButton = styled.button`
  width: 80px;
  background: none;
  border: none;
  color: whitesmoke;
  font-size: 40px;
  cursor: pointer;
`;

export const NavbarExtendedContainer = styled.div`
  height: 60vh;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10%;
  overflow: hidden;
`;

export const NavbarLinkExtendedOne = styled.div`
  color: #926d0b;
  font-size: x-large;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: whitesmoke;
    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;

export const NavbarLinkExtendedTwo = styled(NavbarLinkExtendedOne)``;
export const NavbarLinkExtendedThree = styled(NavbarLinkExtendedOne)``;
export const NavbarLinkExtendedFour = styled(NavbarLinkExtendedTwo)``;
export const NavbarLinkExtendedFive = styled(NavbarLinkExtendedOne)``;
export const NavbarLinkExtendedSix = styled(NavbarLinkExtendedTwo)``;
