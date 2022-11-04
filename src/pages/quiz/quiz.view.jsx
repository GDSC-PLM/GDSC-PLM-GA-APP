import React from "react";
import styled from "styled-components";

import QuizContent from "./components/quiz-page-content/quiz-content.component";
import GDSCLogo from "../../assets/images/gdsc-logo/GDSC-PLM.logo";

import StateChange from "../state-change/index";

export const QuizContainer = styled.main`
  display: flex;
  align-items: center;

  flex-direction: column;

  max-width: 100vw;
  min-height: 100vh;

  position: relative;
  overflow: hidden;

  img.logo {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 30px;

    @media only screen and (min-width: 1024px) {
      left: 40px;
      margin: 0;
    }
  }

  @media only screen and (min-width: 1024px) {
    justify-content: center;
  }
`;

const QuizView = ({ haribot, question, checkAnswer }) => {
  return (
    <QuizContainer>
      <QuizContent
        haribot={haribot}
        question={question}
        checkAnswer={checkAnswer}
      />
      <GDSCLogo />
      <StateChange />
    </QuizContainer>
  );
};

export default React.memo(QuizView);
