import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const UnauthorizedContainer = styled.main`
  display: flex;
  justify-content: center;
`;

const UnauthorizedContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  padding: 1.5rem;
`;

const UnauthorizedText = styled.h1`
  font-family: "Google Sans";
  color: var(--gdsc-text-body);

  margin-bottom: 12px;
`;

const UnauthorizedSubText = styled.p`
  font-family: "Google Sans";
  color: var(--gdsc-text-primary);
`;

const Unauthorized = () => {
  return (
    <UnauthorizedContainer>
      <UnauthorizedContent>
        <UnauthorizedText>Unauthorized Access</UnauthorizedText>
        <UnauthorizedSubText>
          You are not authorized to access the admin portal.
        </UnauthorizedSubText>
        <UnauthorizedSubText>
          Please click <Link to="/">here</Link> to go back to the welcome page.
        </UnauthorizedSubText>
      </UnauthorizedContent>
    </UnauthorizedContainer>
  );
};

export default Unauthorized;
