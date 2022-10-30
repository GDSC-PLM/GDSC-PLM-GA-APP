import React from "react";
import styled from "styled-components";

import GDSCLogo from "../../assets/images/gdsc-logo/GDSC-PLM.logo";

const ChangeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;

  img.logo {
    position: absolute;
    bottom: 40px;
    left: 40px;
  }

  position: absolute;
  top: 0;
  left: 0;

  background: #fff;

  transform: translateX(100%);
  transition: 500ms ease-in-out;

  @media only screen and (min-width: 1024px) {
    justify-content: center;
  }

  z-index: 9999;
`;

const Haribot = styled.img``;

const StateChangeView = ({ haribot }) => {
  return (
    <ChangeContainer id="state-change-page">
      <Haribot
        src={require(`../../assets/images/haribots/${haribot.type}-${
          haribot.state + 1
        }.png`)}
        alt="haribot-state-change"
      />
      <GDSCLogo />
    </ChangeContainer>
  );
};

export default StateChangeView;
