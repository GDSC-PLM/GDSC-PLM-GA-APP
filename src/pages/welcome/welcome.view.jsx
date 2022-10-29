import React from "react";
import styled from "styled-components";

import { FlexContainer } from "../../styles/containers";
import GDSCLogo from "../../assets/images/gdsc-logo/GDSC-PLM.logo";
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
    </WelcomeContainer>
  );
};

export default React.memo(WelcomeView);
