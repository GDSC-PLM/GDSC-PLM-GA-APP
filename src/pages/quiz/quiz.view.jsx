import React from "react";
import styled from "styled-components";

import QuizContent from "./components/quiz-page-content/quiz-content.component";
import GDSCLogo from "../../assets/images/gdsc-logo/GDSC-PLM.logo";

const QuizContainer = styled.main`
  display: flex;
  align-items: center;

  flex-direction: column;

  max-width: 100vw;
  min-height: 100vh;

  position: relative;
  overflow: hidden;

  img.logo {
    position: absolute;
    bottom: 40px;
    left: 40px;
  }

  @media only screen and (min-width: 1024px) {
    justify-content: center;
  }
`;

const QuizView = ({ haribot, question }) => {
  return (
    <QuizContainer>
      <QuizContent haribot={haribot} question={question} />
      <GDSCLogo />
    </QuizContainer>
  );
};

export default React.memo(QuizView);
