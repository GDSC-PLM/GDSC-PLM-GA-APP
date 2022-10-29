import React from "react";

import QuizView from "./quiz.view";
import useQuizHook from "./quiz.hook";
import AppContext from "../../context/app.context";

const Quiz = () => {
  const { haribot, question } = useQuizHook(AppContext);

  return <QuizView haribot={haribot} question={question} />;
};

export default React.memo(Quiz);
