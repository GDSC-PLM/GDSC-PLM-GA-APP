import React from "react";
import styled from "styled-components";

import ScoreContent from "./components/score-page-content/score-content.component";
import GDSCLogo from "../../assets/images/gdsc-logo/GDSC-PLM.logo";

const ScoreViewContainer = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;

  position: absolute;
  top: 0;
  left: 0;

  img.logo {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 30px;

    @media only screen and (min-width: 1024px) {
      left: 40px;
      margin: 0;
    }

    transition: all 300ms ease-in-out;
  }

  @media only screen and (min-width: 1024px) {
    align-items: center;
    margin-top: 0;
  }
`;

const ScoreView = ({ haribot, score, tryAgain }) => {
  return (
    <ScoreViewContainer>
      <ScoreContent haribot={haribot} score={score} tryAgain={tryAgain} />
      <GDSCLogo />
    </ScoreViewContainer>
  );
};

export default ScoreView;
