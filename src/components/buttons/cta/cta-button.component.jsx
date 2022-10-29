import React from "react";
import styled from "styled-components";

const CTAButton = styled.button`
  font-family: "Google Sans";
  font-weight: 600;
  font-size: 2rem;

  color: var(--gdsc-text-btn);
  background: var(--gdsc-core-blue2);

  padding: 0.25em 1.5em;
  border: none;
  border-radius: 115px;

  cursor: pointer;
`;

const CallToAction = ({ text }) => <CTAButton>{text}</CTAButton>;

export default CallToAction;
