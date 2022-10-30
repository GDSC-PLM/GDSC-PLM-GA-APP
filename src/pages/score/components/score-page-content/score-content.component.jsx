import React from "react";
import styled from "styled-components";

import { FlexContainer } from "../../../../styles/containers";
import ScoreCTA from "../score-cta/score-cta.component";
import ScoreLinks from "../score-links/score-links.component";

const ScoreContentContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 5rem;
  }

  transition: 300ms ease-in-out;
`;

const Haribot = styled.img`
  scale: 0.7;
  @media only screen and (min-width: 1024px) {
    scale: 0.85;
  }
`;

const ScoreContainer = styled(FlexContainer)`
  flex-direction: column;
  gap: 2rem;
`;

const ScoreContent = ({ haribot, score, tryAgain }) => {
  return (
    <ScoreContentContainer>
      <Haribot
        src={require(`../../../../assets/images/haribots/${haribot.type}-${haribot.state}.png`)}
      />
      <ScoreContainer>
        <ScoreCTA score={score} onClick={tryAgain} />
        <ScoreLinks />
      </ScoreContainer>
    </ScoreContentContainer>
  );
};

export default ScoreContent;
