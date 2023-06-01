import React from "react";
import styled from "styled-components";

const DynamicEnglish = () => {
  return (
    <Wrapper>
      <LetterE>E</LetterE>
      <WrapperTwo>
      <LetterN>n</LetterN>
      <LetterG>g</LetterG>
      <LetterL>l</LetterL>
      <LetterI>i</LetterI>
      <LetterS>s</LetterS>
      <LetterH>h</LetterH>
      </WrapperTwo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const WrapperTwo = styled.div`
display: flex;
  animation: blink 1.8s;

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

const LetterE = styled.div`
  animation: letterSlideLeft 0.5s;
  
  @keyframes letterSlideLeft {
    from {
      transform: translate3d(-5000%, 0, 0);
    }
  }
`;

const LetterN = styled.div`
  animation: letterSlideRight 2s;

  @keyframes letterSlideRight {
    from {
      transform: translate3d(5000%, 0, 0);
    }
  }
  
`;
const LetterG = styled(LetterN)`
`;
const LetterL = styled(LetterN)`
`;
const LetterI = styled(LetterN)`
`;
const LetterS = styled(LetterN)`
`;
const LetterH = styled(LetterN)`
`;

export default DynamicEnglish;
