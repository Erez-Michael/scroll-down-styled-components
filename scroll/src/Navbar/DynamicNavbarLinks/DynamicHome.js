import React from "react";
import styled from "styled-components";

const DynamicHome = () => {
  return (
    <Wrapper>
      <LetterH>H</LetterH>
      <LetterO>o</LetterO>
      <LetterM>m</LetterM>
      <LetterE>e</LetterE>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const LetterH = styled.div`
  animation: blink 1s;

  @keyframes blink {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;
const LetterO = styled.div`
  animation: blink 1.2s;
`;
const LetterM = styled(LetterH)`
  animation: blink 1.4s;
`;
const LetterE = styled(LetterO)`
  animation: blink 1.6s;
`;

export default DynamicHome;
