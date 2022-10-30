import React from "react";
import styled from "styled-components";

import { FlexContainer } from "../../styles/containers";
import GDSCLogo from "../../assets/images/gdsc-logo/GDSC-PLM.logo";
import WelcomeHero from "./components/welcome-hero/welcome-hero.component";

import wave from "../../assets/water/wave.png";

const WelcomeContainer = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  max-width: 100vw;
  min-height: 100vh;

  padding: 4rem;
  overflow: hidden;

  position: relative;

  .waves-container {
    height: 5%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .waves {
    background: url(${wave}) repeat-x;
    position: absolute;
    top: -150px;
    width: 6400px;
    height: 450px;

    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
  }

  .waves:nth-of-type(2) {
    top: -150px;

    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      swell 7s ease -1.25s infinite;
  }

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1485px;
    }
  }

  @keyframes swell {
    0%,
    100% {
      transform: translate3d(0, -25px, 0);
    }
    50% {
      transform: translate3d(0, 5px, 0);
    }
  }
`;

const WelcomeContent = styled(FlexContainer)`
  flex-direction: column;
  gap: 8rem;

  animation: fadein 900ms linear forwards;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const WelcomeView = ({ navigateToInstructions }) => {
  return (
    <WelcomeContainer>
      <WelcomeContent>
        <GDSCLogo />
        <WelcomeHero navigateToInstructions={navigateToInstructions} />
      </WelcomeContent>
      <div className="waves-container">
        <div className="waves"></div>
        <div className="waves"></div>
      </div>
    </WelcomeContainer>
  );
};

export default React.memo(WelcomeView);
