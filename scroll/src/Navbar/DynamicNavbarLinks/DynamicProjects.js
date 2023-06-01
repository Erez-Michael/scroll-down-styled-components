import React from "react";
import styled from "styled-components";

const DynamicProjects = () => {
  return (
    <Wrapper>
      <LetterP>P</LetterP>
      <LetterR>r</LetterR>
      <LetterO>o</LetterO>
      <LetterJ>j</LetterJ>
      <LetterE>e</LetterE>
      <LetterC>c</LetterC>
      <LetterT>t</LetterT>
      <LetterS>s</LetterS>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const LetterP = styled.div`
  animation-duration: 2s;
  animation-name: letterSlideLeft;

  @keyframes letterSlideLeft {
    from {
      transform: translate3d(5000%, 0, 0);
      visibility: visible;
    }
  }
`;
const LetterR = styled(LetterP)`
  animation-duration: 0.4s;
`;
const LetterO = styled(LetterP)`
  animation-duration: 0.6s;
`;
const LetterJ = styled(LetterP)`
  animation-duration: 0.8s;
`;
const LetterE = styled(LetterP)`
  animation-duration: 1s;
`;
const LetterC = styled(LetterP)`
  animation-duration: 1.2s;
`;
const LetterT = styled(LetterP)`
  animation-duration: 1.4s;
`;
const LetterS = styled(LetterP)`
  animation-duration: 1.6s;
`;

export default DynamicProjects;
