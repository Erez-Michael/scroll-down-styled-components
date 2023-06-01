import React from "react";
import styled from "styled-components";

const DynamicAbout = () => {
  return (
    <Wrapper>
      <LetterA>A</LetterA>
      <LetterB>b</LetterB>
      <LetterO>o</LetterO>
      <LetterU>u</LetterU>
      <LetterT>t</LetterT>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const LetterA = styled.div`
  animation-duration: 0s;
  animation-name: letterSlideRight;

  @keyframes letterSlideRight {
    from {
      transform: translate3d(-5000%, 0, 0);
    }
  }
`;
const LetterB = styled(LetterA)`
  animation-duration: 0.3s;
`;
const LetterO = styled(LetterA)`
  animation-duration: 0.5s;
`;
const LetterU = styled(LetterA)`
  animation-duration: 0.7s;
`;
const LetterT = styled(LetterA)`
  animation-duration: 0.9s;
`;

export default DynamicAbout;
