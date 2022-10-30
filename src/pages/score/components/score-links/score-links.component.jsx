import React from "react";
import styled from "styled-components";

import { FlexContainer } from "../../../../styles/containers";

const ScoreLinksContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  gap: 2rem;

  .core-blue {
    font-weight: 600;
    color: var(--gdsc-core-blue2);
  }
  .core-red {
    font-weight: 600;
    color: var(--gdsc-core-red);
  }
  .core-green {
    font-weight: 600;
    color: var(--gdsc-core-green);
  }
  .core-yellow {
    font-weight: 600;
    color: var(--gdsc-core-yellow);
  }
`;

const ScoreLinksText = styled.p`
  font-family: "Google Sans";
  font-weight: 400;
  font-size: 1rem;

  color: var(--gdsc-text-body);
  @media only screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

const SocialsContainer = styled(FlexContainer)`
  gap: 12px;
`;

const Link = styled.a``;
const Socials = styled.img``;

const ScoreLinks = () => {
  return (
    <ScoreLinksContainer>
      <ScoreLinksText>
        Enjoyed this game? Follow <span className="core-blue">G</span>
        <span className="core-red">D</span>
        <span className="core-green">S</span>
        <span className="core-yellow">C</span> PLM for more!
      </ScoreLinksText>
      <SocialsContainer>
        <Link href="#">
          <Socials
            src={require("../../../../assets/images/socials/fb-logo.png")}
          />
        </Link>
        <Link href="#">
          <Socials
            src={require("../../../../assets/images/socials/twitter-logo.png")}
          />
        </Link>
        <Link href="#">
          <Socials
            src={require("../../../../assets/images/socials/ig-logo.png")}
          />
        </Link>
      </SocialsContainer>
    </ScoreLinksContainer>
  );
};

export default ScoreLinks;
