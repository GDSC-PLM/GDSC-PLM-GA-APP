import React from "react";
import styled from "styled-components";

const DialogueBox = styled.div`
  max-width: 356px;
  padding: 26px;

  border-radius: 17px;
  background: var(--gdsc-light-blue);

  @media only screen and (min-width: 1024px) {
    max-width: 626px;
    padding: 2.5rem;
  }
`;

const DialogueText = styled.p`
  font-family: "Google Sans";
  font-weight: 600;
  font-size: 20px;

  text-align: center;
  color: var(--gdsc-core-blue1);

  @media only screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;

const QuestionDialogue = ({ question }) => {
  return (
    <DialogueBox>
      <DialogueText>{question}</DialogueText>
    </DialogueBox>
  );
};

export default QuestionDialogue;
