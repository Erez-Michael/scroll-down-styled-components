import React from "react";
import styled from "styled-components";

const DynamicFrancais = () => {
  return (
    <Wrapper>
      <LetterF>F</LetterF>
      <LetterR>r</LetterR>
      <LetterA>a</LetterA>
      <LetterN>n</LetterN>
      <LetterC>c</LetterC>
      <LetterA2>a</LetterA2>
      <LetterI>i</LetterI>
      <LetterS>s</LetterS>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const LetterF = styled.div`
  animation-duration: 0s;
  animation-name: letterSlide;

  @keyframes letterSlide {
    from {
      transform: translate3d(0, 5000%, 0);
      visibility: visible;
    }
  }
`;

const LetterR = styled(LetterF)`
  animation-duration: 0.6s;
`;
const LetterA = styled(LetterF)`
  animation-duration: 0.8s;
`;
const LetterN = styled(LetterF)`
  animation-duration: 1s;
`;
const LetterC = styled(LetterF)`
  animation-duration: 1.2s;
`;
const LetterA2  = styled(LetterF)`
  animation-duration: 1.4s;
`;
const LetterI = styled(LetterF)`
  animation-duration: 1.6s;
`;
const LetterS = styled(LetterF)`
  animation-duration: 1.8s;
`;

export default DynamicFrancais;
