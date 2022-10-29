import React from "react";
import styled from "styled-components";

import QuestionDialogue from "../../../../components/dialogues/question-dialogue/question-dialogue.component";
import Choice from "../../../../components/buttons/choice/choice-button.component";

const QnAContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  gap: 1.75rem;

  max-width: 356px;
  overflow: hidden;

  @media only screen and (min-width: 1024px) {
    max-width: 626px;
  }

  transition: 300ms ease-in-out;
`;

const QnAText = styled.p`
  font-family: "Google Sans";
  font-size: 1rem;

  color: var(--gdsc-text-body);
  @media only screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

const QnAChoicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const QnAComponent = ({ question, handleAnswer }) => (
  <QnAContainer>
    <QnAText>Question {question.number}/5</QnAText>
    <QuestionDialogue question={question.prompt} />
    <QnAChoicesContainer>
      {question.choices.map(({ key, choice }) => (
        <Choice key={key} choice={choice} onClick={handleAnswer} />
      ))}
    </QnAChoicesContainer>
  </QnAContainer>
);

export default React.memo(QnAComponent);
