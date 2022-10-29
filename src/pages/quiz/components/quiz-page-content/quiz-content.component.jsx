import React from "react";
import styled from "styled-components";

import QnA from "../qna-component/qna.component";

const QuizContentContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  width: 100%;

  gap: 1rem;

  @media only screen and (min-width: 1024px) {
    align-items: flex-end;
    flex-direction: row;
    gap: 2.5rem;
  }
`;

const Haribot = styled.img`
  scale: 0.75;
`;

const QuizContent = ({ haribot, question }) => {
  return (
    <QuizContentContainer>
      <Haribot
        src={require(`../../../../assets/images/haribots/${haribot.type}-${haribot.state}.png`)}
        alt="haribot-state"
      />
      <QnA question={question} />
    </QuizContentContainer>
  );
};

export default React.memo(QuizContent);
