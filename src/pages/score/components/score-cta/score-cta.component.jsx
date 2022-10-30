import React from "react";
import styled from "styled-components";

import { FlexContainer } from "../../../../styles/containers";
import CallToAction from "../../../../components/buttons/cta/cta-button.component";

const ScoreCTAContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  gap: 1rem;
`;

const ScoreCTATextContainer = styled(FlexContainer)`
  flex-direction: column;
  gap: 1rem;
`;

const ScoreCTAText = styled.p`
  font-family: "Google Sans";
  font-weight: 600;

  color: var(${({ color }) => color});

  span {
    font-size: 70px;
    color: var(--gdsc-core-${({ won }) => (won ? "blue1" : "red")});
  }

  ${({ type }) => {
    switch (type) {
      case "main":
        return `
        font-size: 40px;
        @media only screen and (min-width: 1024px) {
            font-size: 60px;
            span {
              font-size: 96px;
            }
          }
        `;
      case "sub":
        return `
        font-size: 20px;
        @media only screen and (min-width: 1024px) {
            font-size: 32px;
          }
        `;
      default:
        return "";
    }
  }}
`;

const ScoreCTA = ({ score, onClick }) => {
  return (
    <ScoreCTAContainer>
      <ScoreCTATextContainer>
        <ScoreCTAText
          type="sub"
          color={`--gdsc-core-${score <= 2 ? "red" : "blue1"}`}
        >
          You scored
        </ScoreCTAText>
        <ScoreCTAText type="main" color="--gdsc-text-grey" won={score > 2}>
          <span>{score}</span>/5
        </ScoreCTAText>
      </ScoreCTATextContainer>
      <CallToAction text="Try again" onClick={onClick} />
    </ScoreCTAContainer>
  );
};

export default ScoreCTA;
