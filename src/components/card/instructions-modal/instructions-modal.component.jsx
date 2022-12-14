import React from "react";
import styled from "styled-components";

import { FlexContainer } from "../../../styles/containers";
import GDSCLogo from "../../../assets/images/gdsc-logo/GDSC-PLM.logo";
import CallToAction from "../../buttons/cta/cta-button.component";

export const InstructionsModalContainer = styled.section`
  max-width: 355px;
  padding: 1.5rem;
  background: #fff;

  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media only screen and (min-width: 1024px) {
    max-width: 780px;
  }

  transition: 300ms ease-in-out;

  animation: fadein 300ms linear forwards;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const InstructionsModalContent = styled(FlexContainer)`
  flex-direction: column;
  width: 100%;
`;

export const ModalImage = styled.img`
  scale: 0.75;

  @media only screen and (min-width: 1024px) {
    scale: 0.85;
  }
`;

export const ModalMainContent = styled(FlexContainer)`
  margin-top: 16px;
  flex-direction: column;
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ModalTextContainer = styled(FlexContainer)`
  flex-direction: column;
  @media only screen and (min-width: 1024px) {
    padding: 0rem 1.75rem;
  }
`;

export const ModalText = styled.p`
  font-family: "Google Sans";
  text-align: center;
  ${({ type }) => {
    switch (type) {
      case "heading":
        return `
        font-size: 20px;
        color: var(--gdsc-core-blue1);
        font-weight: 600;
        margin-bottom: 12px;

        @media only screen and (min-width: 1024px) {
            font-size: 32px;
          }
        `;
      case "content":
        return `
        font-size: 16px;
        color: var(--gdsc-text-body);
        margin-bottom: 24px;

        @media only screen and (min-width: 1024px) {
           font-size: 24px;
        }
        `;
      default:
        return "";
    }
  }}
`;

const InstructionsModalComponent = ({ navigateToQuiz = null }) => {
  return (
    <InstructionsModalContainer>
      <InstructionsModalContent>
        <GDSCLogo />
        <ModalMainContent>
          <ModalImage
            src={require("../../../assets/gifs/stills/yellow-3.gif")}
            alt="haribot"
          />
          <ModalTextContainer>
            <ModalText type="heading">
              Save Haribot & Friends from drowning!
            </ModalText>
            <ModalText type="content">
              Answer <strong>5 questions</strong> about GDSC PLM or tech in
              general.
            </ModalText>
            <ModalText type="content">
              <strong>3 wrong answers</strong> will drown Haribot!
            </ModalText>
            <CallToAction text="Start" onClick={navigateToQuiz} />
          </ModalTextContainer>
        </ModalMainContent>
      </InstructionsModalContent>
    </InstructionsModalContainer>
  );
};

export default InstructionsModalComponent;
