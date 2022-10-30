import React from "react";
import styled from "styled-components";

import ScoreContent from "./components/score-page-content/score-content.component";
import GDSCLogo from "../../assets/images/gdsc-logo/GDSC-PLM.logo";

const ScoreViewContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;

  position: absolute;
  top: 0;
  left: 0;

  img.logo {
    position: absolute;
    bottom: 40px;
    left: 40px;
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
