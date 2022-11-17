import React from "react";
import styled from "styled-components";

const ChoiceButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 172px;
  padding: 12px 17px;

  background: var(--gdsc-core-blue1);
  color: var(--gdsc-text-btn);

  border: none;
  border-radius: 12px;

  cursor: pointer;
  overflow: hidden;
  @media only screen and (min-width: 1024px) {
    width: 303px;
  }
`;

const ButtonText = styled.p`
  font-family: "Google Sans";
  font-weight: 600;
  font-size: 1rem;

  width: 100%;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media only screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

const Choice = ({ choice, onClick = null }) => {
  return (
    <ChoiceButton onClick={onClick}>
      <ButtonText title={choice}>{choice}</ButtonText>
    </ChoiceButton>
  );
};

export default Choice;
