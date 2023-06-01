import React from "react";
import styled from "styled-components";

const DynamicContact = () => {
  return (
    <Wrapper>
      <LetterC>C</LetterC>
      <LetterO>o</LetterO>
      <LetterN>n</LetterN>
      <LetterT>t</LetterT>
      <LetterA>a</LetterA>
      <LetterC2>c</LetterC2>
      <LetterT2>t</LetterT2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const LetterC = styled.div`
  animation-duration: 0s;
  animation-name: letterSlideRight;

  @keyframes letterSlideRight {
    from {
      transform: translate3d(-5000%, 0, 0);
      visibility: visible;
    }
  }
`;

const LetterO = styled(LetterC)`
  animation-duration: 0.5s;
`;
const LetterN = styled(LetterC)`
  animation-duration: 0.7s;
`;
const LetterT = styled(LetterC)`
  animation-duration: 0.9s;
`;
const LetterA = styled(LetterC)`
  animation-duration: 1.1s;
`;
const LetterC2 = styled(LetterC)`
  animation-duration: 1.3s;
`;
const LetterT2 = styled(LetterC)`
  animation-duration: 1.5s;
`;

export default DynamicContact;
