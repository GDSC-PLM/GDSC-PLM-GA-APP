import React from "react";
import styled from "styled-components";

import QnA from "../qna-component/qna.component";

const QuizContentContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  width: 100%;

  gap: 0.5rem;
  margin-top: calc(15vh - 30px);

  @media only screen and (min-width: 1024px) {
    align-items: flex-end;
    flex-direction: row;

    gap: 2.5rem;
    margin: 0px 20px 0px 0px;
  }
`;

const Haribot = styled.img`
  width: 165px;
  height: 178px;

  @media only screen and (min-width: 1024px) {
    width: 291px;
    height: 321px;

    scale: 0.85;
  }
`;

const QuizContent = ({ haribot, question, checkAnswer }) => {
  return (
    <QuizContentContainer>
      <Haribot
        src={require(`../../../../assets/images/haribots/${haribot.type}-${haribot.state}.png`)}
        alt="haribot-state"
      />
      <QnA question={question} handleAnswer={checkAnswer} />
    </QuizContentContainer>
  );
};

export default React.memo(QuizContent);
