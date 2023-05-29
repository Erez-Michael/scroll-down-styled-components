import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  caret-color: transparent;
  opacity: 0.85;
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "0")};
  background: linear-gradient(
    20deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(63, 92, 122, 1) 42%,
    rgba(3, 41, 80, 1) 100%
  );
`;

export const NavbarInnerContainer = styled.div`
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
  transition: all 0.2s ease-in-out;
  height: ${(props) => (props.extendNavbar ? "100vh" : "fit-content")};
  @media screen and (min-width: 1024px) {
    display: none;
  }
  animation-duration: 0.4s;
  animation-name: slideInLeft;

  @keyframes slideInLeft {
    from {
      transform: translate3d(-250%, 0, 0);
      visibility: visible;
    }
  }
  :hover {
  color:  whitesmoke;
    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;

export const NavbarLinkExtendedTwo = styled.div`
  color: #926d0b;
  font-size: x-large;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  height: ${(props) => (props.extendNavbar ? "100vh" : "fit-content")};
  @media screen and (min-width: 1024px) {
    display: none;
  }
  animation-duration: 0.6s;
  animation-name: slideInRight;

  @keyframes slideInRight {
    from {
      transform: translate3d(250%, 0, 0);
      visibility: visible;
    }
  }
  :hover {
    color: whitesmoke;
    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;

export const NavbarLinkExtendedThree = styled(NavbarLinkExtendedOne)`
  animation-duration: 0.8s;
`;
export const NavbarLinkExtendedFour = styled(NavbarLinkExtendedTwo)`
  animation-duration: 1s;
`;
export const NavbarLinkExtendedFive = styled(NavbarLinkExtendedOne)`
  animation-duration: 1.2s;
`;
export const NavbarLinkExtendedSix = styled(NavbarLinkExtendedTwo)`
  animation-duration: 1.4s;
`;
