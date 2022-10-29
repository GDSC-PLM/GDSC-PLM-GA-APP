import React from "react";
import styled from "styled-components";

const DialogueBox = styled.div`
  max-width: 356px;
  padding: 26px;

  border-radius: 17px;
  background: var(--gdsc-light-blue);
`;

const DialogueText = styled.p`
  font-family: "Google Sans";
  font-weight: 600;
  font-size: 20px;

  text-align: center;
  color: var(--gdsc-core-blue1);
`;

const QuestionDialogue = ({ question }) => {
  return (
    <DialogueBox>
      <DialogueText>{question}</DialogueText>
    </DialogueBox>
  );
};

export default QuestionDialogue;
