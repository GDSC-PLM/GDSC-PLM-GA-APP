import React from "react";
import styled from "styled-components";

import { FlexContainer } from "../../styles/containers";
import GDSCLogo from "../../assets/images/gdsc-logo/GDSC-PLM.logo";
import WelcomeHero from "./components/welcome-hero/welcome-hero.component";

import wave1 from "../../assets/water/wave1.png";
import wave2 from "../../assets/water/wave2.png";

import hbotYellow from "../../assets/images/haribots/hbot-yellow.png";
import hbotBlue from "../../assets/images/haribots/hbot-blue.png";
import hbotGreen from "../../assets/images/haribots/hbot-green.png";
import hbotRed from "../../assets/images/haribots/hbot-red.png";

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
    background: url(${wave2}) repeat-x;
    position: absolute;
    top: -198px;
    width: 6400px;
    height: 300px;

    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
  }

  .waves:nth-of-type(2) {
    background: url(${wave1}) repeat-x;
    top: -150px;

    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      swell 7s ease -1.25s infinite;

    z-index: 99998;
  }

  .hbot-yellow {
    background: url(${hbotYellow});
    --size: 346px;
    width: var(--size);
    aspect-ratio: 1;

    position: absolute;
    left: -120px;
    bottom: -120px;

    animation: float 3s ease-in-out infinite;
    transition: 350ms ease-in-out;
    scale: 0.5;

    @media only screen and (min-width: 1024px) and (max-width: 1439px) {
      scale: 1;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;

      bottom: -140px;
    }

    @media only screen and (min-width: 1440px) {
      --size: 346px;
      width: var(--size);
      height: var(--size);

      scale: 1;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      bottom: -100px;
    }
  }

  .hbot-blue {
    background: url(${hbotBlue});
    --size: 600px;
    width: var(--size);
    aspect-ratio: 1;

    position: absolute;
    right: -200px;
    bottom: -200px;

    animation: float 5s ease-in-out infinite;
    transition: 350ms ease-in-out;
    scale: 0.5;

    @media only screen and (min-width: 1024px) and (max-width: 1439px) {
      scale: 1;
      right: -120px;
      bottom: -120px;
      z-index: 99997;
    }

    @media only screen and (min-width: 1440px) {
      --size: 550px;
      width: var(--size);
      aspect-ratio: 1;

      scale: 1;
      right: 0px;
      bottom: -80px;
    }
  }

  .hbot-green {
    background: url(${hbotGreen});
    --size: 170px;
    width: var(--size);
    aspect-ratio: 1;

    position: absolute;
    animation: float 4s ease-in-out infinite;
    transition: 350ms ease-in-out;

    display: none;
    @media only screen and (min-width: 1024px) and (max-width: 1439px) {
      display: block;
      scale: 1;
      left: 0;
      bottom: -50px;
    }

    @media only screen and (min-width: 1440px) {
      display: block;
      scale: 1;
      left: 0px;
      bottom: -10px;
    }
  }

  .hbot-red {
    background: url(${hbotRed});
    --size: 190px;
    width: var(--size);
    aspect-ratio: 1;

    position: absolute;
    animation: float 2s ease-in-out infinite;
    transition: 350ms ease-in-out;

    display: none;
    margin-left: 250px;

    @media only screen and (min-width: 1024px) and (max-width: 1439px) {
      display: block;
      scale: 1;
      left: 0;
      bottom: -50px;
    }

    @media only screen and (min-width: 1440px) {
      display: block;
      scale: 1;
      left: 0px;
      bottom: -50px;

      margin-left: 300px;
    }
  }

  .qmark-bg {
    position: absolute;
    z-index: -9999;
    scale: 0.5;

    @media only screen and (min-width: 1024px) {
      scale: 1;
    }

    transition: 300ms ease-in-out;
  }

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1555px;
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

  @keyframes float {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
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

  z-index: 9999;
`;

const WelcomeView = ({ navigateToInstructions }) => {
  return (
    <WelcomeContainer>
      <WelcomeContent>
        <GDSCLogo />
        <WelcomeHero navigateToInstructions={navigateToInstructions} />
        <img
          className="qmark-bg"
          src={require("../../assets/images/other/qmark-bg.png")}
          alt="qmark-bg"
        />
      </WelcomeContent>
      <div className="waves-container">
        <div className="waves"></div>
        <div className="waves"></div>
        <div className="hbot-yellow"></div>
        <div className="hbot-blue"></div>
        <div className="hbot-green"></div>
        <div className="hbot-red"></div>
      </div>
    </WelcomeContainer>
  );
};

export default React.memo(WelcomeView);
