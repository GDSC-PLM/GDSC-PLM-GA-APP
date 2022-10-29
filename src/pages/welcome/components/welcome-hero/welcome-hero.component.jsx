import React from "react";
import styled from "styled-components";

import { FlexContainer } from "../../../../styles/containers";
import CallToAction from "../../../../components/buttons/cta/cta-button.component";

const HeroContainer = styled.section`
  max-width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  gap: 42px;

  .core-blue {
    color: var(--gdsc-core-blue2);
  }
  .core-red {
    color: var(--gdsc-core-red);
  }
  .core-green {
    color: var(--gdsc-core-green);
  }
  .core-yellow {
    color: var(--gdsc-core-yellow);
  }
`;

const HeroTextContainer = styled(FlexContainer)`
  flex-direction: column;
  width: 100%;
`;

const HeroText = styled.p`
  font-family: "Google Sans";

  ${({ type }) => {
    switch (type) {
      case "heading":
        return `
        display: flex; align-items: center; justify-content: center;
        font-size: 50px;
        font-weight: 600;
        &::after{
            font-size: 12px;
            content: 'QUIZ';

            background-color: #F6F6F6;
            color: #676C72;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

            border-radius: 100px;
            padding: .25em 1.25em;
            margin-left: 8px;
        }

        @media only screen and (min-width: 1024px) {
            font-size: 96px;
            &::after{
                font-size: 24px;
            }
        }
        `;
      case "subheading":
        return `
        font-size: 20px;
        font-weight: 600;
        color: var(--gdsc-text-primary);

        @media only screen and (min-width: 1024px) {
            font-size: 40px;
        }
        `;
      default:
        return "";
    }
  }}
  transition: 300ms ease-in-out;
`;

const WelcomeHero = ({ navigateToInstructions = null }) => {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <HeroText type="subheading">Save Haribot & Friends!</HeroText>
        <HeroText type="heading">
          <span className="core-blue">G</span>
          <span className="core-red">D</span>
          <span className="core-green">S</span>
          <span className="core-yellow">C</span>

          <span className="core-yellow" style={{ marginLeft: "16px" }}>
            PLM
          </span>
        </HeroText>
      </HeroTextContainer>
      <CallToAction text="Start" onClick={navigateToInstructions} />
    </HeroContainer>
  );
};

export default WelcomeHero;
