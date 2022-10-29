import React from "react";
import styled from "styled-components";

import { FlexContainer } from "../../styles/containers";
import GDSCLogo from "../../assets/images/GDSC-PLM.logo";
import WelcomeHero from "./components/welcome-hero/welcome-hero.component";

const WelcomeContainer = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  max-width: 100vw;
  min-height: 100vh;

  padding: 4rem;
`;

const WelcomeContent = styled(FlexContainer)`
  flex-direction: column;
  gap: 8rem;
`;

const WelcomeView = () => {
  return (
    <WelcomeContainer>
      <WelcomeContent>
        <GDSCLogo />
        <WelcomeHero />
      </WelcomeContent>
    </WelcomeContainer>
  );
};

export default WelcomeView;
