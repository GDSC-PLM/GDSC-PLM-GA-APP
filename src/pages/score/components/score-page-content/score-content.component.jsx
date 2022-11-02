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
  gap: 20px;

  margin-top: 4vh;

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 5rem;

    p.score-message-mobile {
      display: none;
    }
  }

  transition: 300ms ease-in-out;
`;

const Haribot = styled.img`
  width: 165px;
  height: 178px;

  @media only screen and (min-width: 1024px) {
    width: 291px;
    height: 321px;

    scale: 0.85;
  }
`;

const ScoreContainer = styled(FlexContainer)`
  flex-direction: column;
  gap: 2rem;
`;

export const ScoreMessage = styled.p`
  font-family: "Google Sans";
  font-size: 1rem;
  font-weight: 400;

  color: var(--gdsc-text-body);
`;

const ScoreContent = ({ haribot, score, tryAgain }) => {
  return (
    <ScoreContentContainer>
      <ScoreMessage className="score-message-mobile">
        {score > 2
          ? "Congratulations, you saved Haribot!"
          : "Uh oh, Haribot drowned."}
      </ScoreMessage>
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
