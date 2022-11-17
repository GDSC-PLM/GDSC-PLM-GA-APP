import React from "react";
import styled from "styled-components";

import {
  InstructionsModalContainer,
  InstructionsModalContent,
  ModalImage,
  ModalMainContent,
  ModalTextContainer,
  ModalText,
} from "../instructions-modal/instructions-modal.component";

import GDSCLogo from "../../../assets/images/gdsc-logo/GDSC-PLM.logo";
import CallToAction from "../../buttons/cta/cta-button.component";

const SessionExpiredModalContainer = styled(InstructionsModalContainer)``;
const SessionExpiredModalContent = styled(InstructionsModalContent)``;
const SEModalImage = styled(ModalImage)``;
const SEMainContent = styled(ModalMainContent)``;
const SETextContainer = styled(ModalTextContainer)`
  @media only screen and (min-width: 1024px) {
    padding: 0rem 0rem;
  }
`;
const SEText = styled(ModalText)``;

const SessionExpired = ({ navigateToWelcome }) => {
  return (
    <SessionExpiredModalContainer>
      <SessionExpiredModalContent>
        <GDSCLogo />
        <SEMainContent>
          <SEModalImage
            src={require("../../../assets/images/haribots/yellow-se.png")}
            alt="se-haribot"
          />
          <SETextContainer>
            <SEText type="heading">Your session has expired</SEText>
            <SEText type="content">
              Go back to the starting page to start a new session.
            </SEText>
            <CallToAction text="Go Back" onClick={navigateToWelcome} />
          </SETextContainer>
        </SEMainContent>
      </SessionExpiredModalContent>
    </SessionExpiredModalContainer>
  );
};

export default SessionExpired;
