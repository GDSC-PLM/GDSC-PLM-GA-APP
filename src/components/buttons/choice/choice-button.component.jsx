import React from "react";
import styled from "styled-components";

const ChoiceButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 172px;
  padding: 12px 17px;

  background: var(--gdsc-core-blue1);
  color: var(--gdsc-text-btn);

  border: none;
  border-radius: 12px;

  cursor: pointer;
`;

const ButtonText = styled.p`
  font-family: "Google Sans";
  font-size: 1rem;
`;

const Choice = ({ choice, correctAnswer = false, onClick = null }) => {
  return (
    <ChoiceButton onClick={onClick} data-correct-answer={correctAnswer}>
      <ButtonText>{choice}</ButtonText>
    </ChoiceButton>
  );
};

export default Choice;
